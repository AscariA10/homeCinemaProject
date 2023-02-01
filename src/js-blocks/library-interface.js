import ApiMovies from './fetch.js';
import { cardList } from './card-draw.js';
import Pagination from './pagination.js';
import { LocalStorageEntry } from './localStorageEntry.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './modal-window-render.js';

const watchedMoviesStorage = new LocalStorageEntry('watchedMoviesStorage');
const queueMoviesStorage = new LocalStorageEntry('queueMoviesStorage');

const apiMovies = new ApiMovies();

const recommendedData = document.querySelector('.notification-wrapper');
const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');

window.addEventListener('DOMContentLoaded', onWatched);
watchedBtn.addEventListener('click', onWatched);
queueBtn.addEventListener('click', onQueue);

class LibraryRender {
  constructor() {
    this.page = 1;
    this.countFilmsPerPage = 21;
    this.movies = this.getMoviesFromLocalStorage();
    const totalLength = this.movies.length;
    const totalPages = Math.ceil(totalLength / this.countFilmsPerPage);
    this.totalPages = totalPages;
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

  getMovies() {
    const movies = [...this.movies].splice(
      (this.page - 1) * this.countFilmsPerPage,
      this.countFilmsPerPage
    );
    return movies;
  }
}

class LibraryRenderWatched extends LibraryRender {
  getMoviesFromLocalStorage() {
    return watchedMoviesStorage.getLocalStorageEntry() || [];
  }
}

class LibraryRenderQueue extends LibraryRender {
  getMoviesFromLocalStorage() {
    return queueMoviesStorage.getLocalStorageEntry() || [];
  }
}

async function onWatched(event) {
  queueBtn.style.backgroundColor = 'transparent';
  watchedBtn.style.backgroundColor = '#ff6b01';

  const watchedMovies = new LibraryRenderWatched();
  const pagination = new Pagination();

  if (!watchedMovies.getMovies().length) {
    Notify.info("You haven't added any movie to watched yet. Let's do it!");
    const markup = `<span class="recommended-films">Recommended films</span>`;
    recommendedData.innerHTML = markup;
    await renderRecommendedFilms();
    return;
  }

  recommendedData.innerHTML = '';
  pagination.setFunction(watchedMovies.getMovies, watchedMovies);
}

async function onQueue(event) {
  watchedBtn.style.backgroundColor = 'transparent';
  queueBtn.style.backgroundColor = '#ff6b01';

  const queueMovies = new LibraryRenderQueue();
  const pagination = new Pagination();

  if (!queueMovies.getMovies().length) {
    Notify.info("You haven't added any movie to queue yet. Let's do it!");
    const markup = `<span class="recommended-films">Recommended films</span>`;
    recommendedData.innerHTML = markup;
    await renderRecommendedFilms();
    return;
  }

  recommendedData.innerHTML = '';
  pagination.setFunction(queueMovies.getMovies, queueMovies);
}

async function renderRecommendedFilms() {
  const response = await apiMovies.fetchTrendMovies();
  return cardList([...response].splice(0, 9));
}
