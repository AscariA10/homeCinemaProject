/**imports */
import ApiMovies from './js-blocks/fetch.js';
import Pagination from './js-blocks/pagination.js';
import { LocalStorageEntry } from './js-blocks/localStorageEntry.js';

/**class declaration */
const apiMovies = new ApiMovies();
const pagination = new Pagination();

/**Local Storage Initialisation */

const currentPageMovies = new LocalStorageEntry('currentPageMovies');
const firstPageTrendMovies = new LocalStorageEntry('firstPageTrendMovies');

// queueMoviesStorage.addMovieToLocalStorage('sonic');
// watchedMoviesStorage.addMovieToLocalStorage('avatar');
// currentPageMovies.addFilmsToLocalStorage(['qwe']);
// firstPageTrendMovies.addFilmsToLocalStorage([1, 2, 3, 4, 5, 6, 7, 7, 8]);

// console.log(queueMoviesStorage);
// console.log(watchedMoviesStorage);
// console.log(currentPageMovies);
// console.log(firstPageTrendMovies);

import './js-blocks/modal-window-render.js';
