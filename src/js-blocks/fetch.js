import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class ApiMovies {
  constructor() {
    this.page = 1;
    this.totalPages = 0;
    this.API_KEY = 'b446e42b934b4d3ae998459bb3b8c53d';
    this.loader = document.querySelector('.js-loader');
    this.galleryList = document.querySelector('.gallery-list');
  }
  /** Returns page number for pagination */
  get pageNumber() {
    return this.page;
  }
  /** sets the page number if the user clicks on the page number in the pagination */
  set pageNumber(number) {
    this.page = number;
  }
  /** Returns total pages number for pagination */
  get totalPagesNumber() {
    return this.totalPages;
  }

  showLoader() {
    this.galleryList.innerHTML = '';
    this.loader.classList.remove('preloader-hidden');
  }

  hideLoader() {
    this.loader.classList.add('preloader-hidden');
  }
  /** request for a list of the most popular movies to create a collection on the home page */
  async fetchTrendMovies() {
    this.showLoader();
    try {
      const { data } = await axios.get(
        `/trending/movie/week?api_key=${this.API_KEY}&page=${this.page}`
      );
      this.totalPages = data.total_pages;
      return data.results;
    } catch (error) {
      Notify.failure(error.message);
    } finally {
      this.hideLoader();
    }
  }
  /** request a movie by keyword on the main page */
  async searchMovieByName(searchValue) {
    this.showLoader();
    try {
      const { data } = await axios.get(
        `search/movie?api_key=${this.API_KEY}&language=en-US&query=${searchValue}&page=${this.page}&include_adult=false`
      );
      this.totalPages = data.total_pages;
      return data.results;
    } catch (error) {
      Notify.failure(error.message);
    } finally {
      this.hideLoader();
    }
  }
  /** requesting full movie information for the movie page */
  async fetchMovieFullDetails(filmId) {
    try {
      const { data } = await axios.get(
        `movie/${filmId}?api_key=${this.API_KEY}&language=en-US`
      );
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
