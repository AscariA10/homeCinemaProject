import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class ApiMovies {
   constructor() {
      this.page = 1;
      this.totalPages = 0;
      this.API_KEY = 'b446e42b934b4d3ae998459bb3b8c53d';
   }
   /** Returns page number for pagination */
   get pageNumber() {
      return this.page;
   }
   /** sets the page number if the user clicks on the page number in the pagination */
   set pageNumber(number) {
      this.page = number;
   }
   /** request for a list of the most popular movies to create a collection on the home page */
   async fetchTrendMovies() {
      try {
         const { data } = await axios.get(
            `/trending/movie/week?api_key=${this.API_KEY}&page=${this.page}`
         );
         this.totalPages = data.total_pages;
         return data.results;
      } catch (error) {
         Notify.failure(error.message);
      }
   }
   /** request a movie by keyword on the main page */
   async searchMovieByName(searchValue) {
      try {
         const { data } = await axios.get(
            `search/movie?api_key=${this.API_KEY}&language=en-US&query=${searchValue}&page=${this.page}&include_adult=false`
         );
         this.totalPages = data.total_pages;
         return data.results;
      } catch (error) {
         Notify.failure(error.message);
      }
   }
   /** requesting full movie information for the movie page */
   async fetchMovieFullDetails(filmId) {
      try {
         const { data } = await axios.get(`movie/${filmId}?api_key=${this.API_KEY}&language=en-US`);
         return data;
      } catch (error) {
         Notify.failure(error.message);
      }
   }
   /** requesting full information about a possible trailer on YouTube */
   async fetchMovieTrailer(filmId) {
      try {
         const { data } = await axios.get(
            `movie/${filmId}/videos?api_key=${this.API_KEY}&language=en-US`
         );
         return data.results;
      } catch (error) {
         Notify.failure(error.message);
      }
   }
   /** fetchGenres - gets an array of all genres */
   async fetchGenres() {
      try {
         const { data } = await axios.get(
            `/genre/movie/list?api_key=${this.API_KEY}&language=en-US`
         );
         return data;
      } catch (error) {
         Notify.failure(error.message);
      }
   }
}
