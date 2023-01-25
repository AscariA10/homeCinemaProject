import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class ApiMovies {
  constructor() {
    this.page = 1;
    this.totalPages = 0;
    this.API_KEY = 'b446e42b934b4d3ae998459bb3b8c53d';
  }
  /** возвращяет номер страници для пагинации */
  get pageNumber() {
    return this.page;
  }
  /** устанавливает номер страници если пользователь кликнет на номер стр в пагинации */
  set pageNumber(number) {
    this.page = number;
  }
  /** запит на список найпопулярніших фільмів  для створення колекції на головній сторінцi */
  async fetchPopularMovies() {
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
  /** запит фільму за ключовим словом на головній сторінці */
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
  /** запит повної інформації про кінофільм для сторінки кінофільму */
  async fetchSingleMovie(filmId) {
    try {
      const { data } = await axios.get(
        `movie/${filmId}?api_key=${this.API_KEY}&language=en-US`
      );
      return data;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
  /** запит повної інформації про можливий трейлер на YouTube*/
  async fetchMovieTrailers(filmId) {
    try {
      const { data } = await axios.get(
        `movie/${filmId}/videos?api_key=${this.API_KEY}&language=en-US`
      );
      return data.results;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
}
