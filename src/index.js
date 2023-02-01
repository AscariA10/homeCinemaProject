/**imports */
import ApiMovies from './js-blocks/fetch.js';
import Pagination from './js-blocks/pagination.js';
import { LocalStorageEntry } from './js-blocks/localStorageEntry.js';

/**class declaration */
const apiMovies = new ApiMovies();

const pagination = new Pagination(true);
pagination.setFunction(apiMovies.fetchTrendMovies, apiMovies);

/**Local Storage Initialisation */

const currentPageMovies = new LocalStorageEntry('currentPageMovies');
const firstPageTrendMovies = new LocalStorageEntry('firstPageTrendMovies');

import './js-blocks/input-search';
import './js-blocks/modal-window-render.js';

import './js-blocks/back-to-top-button';
import './js-blocks/theme';
import './js-blocks/team-window';
