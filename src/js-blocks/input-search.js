import ApiMovies from './fetch.js';
import Pagination from './pagination.js';

const apiMovies = new ApiMovies();

const errorMessage = document.querySelector('.warning-message');
const formInput = document.querySelector('.js-search__form');

formInput?.addEventListener('submit', onSearchMovies);

function onSearchMovies(evt) {
   evt.preventDefault();
   const value = evt.currentTarget.elements.searchInput.value.trim();

   if (value) {
      const pagination = new Pagination(true);

      pagination.setFunction(apiMovies.searchMovieByName, apiMovies, value);
      formInput.reset();
   } else {
      errorMessage.classList.remove('hidden');
      errorMessage.textContent = 'Please, enter movie name to search.';
      clearMessage();
      return;
   }
}

function clearMessage() {
   setTimeout(() => {
      errorMessage.classList.add('hidden');
   }, 3000);
}

export function fetchTrendFilms() {
   errorMessage.classList.remove('hidden');
   errorMessage.textContent = 'Search result not successful. Enter the correct movie title.';
   const pagination = new Pagination(true);
   pagination.setFunction(apiMovies.fetchTrendMovies, apiMovies);

   clearMessage();
}
