import Pagination from './pagination.js';
import { LocalStorageEntry } from './localStorageEntry.js';

const watchedMoviesStorage = new LocalStorageEntry('watchedMoviesStorage');
const queueMoviesStorage = new LocalStorageEntry('queueMoviesStorage');

const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');

watchedBtn.addEventListener('click', onWatched);
queueBtn.addEventListener('click', onQueue);

let watchedFilmsForTest = [];
let queueFilmsForTest = [];
for (let i = 0; i < 40; i++) {
  watchedFilmsForTest.push({
    adult: false,
    backdrop_path: '/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
    id: 505642,
    title: 'Black Panther: Wakanda Forever',
    original_language: 'en',
    original_title: 'Black Panther: Wakanda Forever',
    overview:
      'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
    poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    media_type: 'movie',
    genre_ids: [28, 12, 878],
    popularity: 1993.631,
    release_date: '2022-11-09',
    video: false,
    vote_average: 7.538,
    vote_count: 1935,
  });
  queueFilmsForTest.push({
    adult: false,
    backdrop_path: '/evaFLqtswezLosllRZtJNMiO1UR.jpg',
    id: 76600,
    title: 'Avatar: The Way of Water',
    original_language: 'en',
    original_title: 'Avatar: The Way of Water',
    overview:
      'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
    poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    media_type: 'movie',
    genre_ids: [878, 12, 28],
    popularity: 2099.293,
    release_date: '2022-12-14',
    video: false,
    vote_average: 7.745,
    vote_count: 4898,
  });
}

watchedMoviesStorage.addFilmsToLocalStorage(watchedFilmsForTest);
queueMoviesStorage.addFilmsToLocalStorage(queueFilmsForTest);

class LibraryRender {
  constructor() {
    this.page = 1;
    this.totalPages = 1;
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
}

class LibraryRenderWatched extends LibraryRender {
  getMovies() {
    return watchedMoviesStorage.getLocalStorageEntry();
  }
}

class LibraryRenderQueue extends LibraryRender {
  getMovies() {
    return queueMoviesStorage.getLocalStorageEntry();
  }
}

function onWatched(event) {
  const watchedMovies = new LibraryRenderWatched();
  const pagination = new Pagination();
  pagination.setFunction(watchedMovies.getMovies, watchedMovies);
}

function onQueue(event) {
  const queueMovies = new LibraryRenderQueue();
  const pagination = new Pagination();
  pagination.setFunction(queueMovies.getMovies, queueMovies);
}
