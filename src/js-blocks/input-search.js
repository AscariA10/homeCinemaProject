import { render } from './card-draw';
import ApiMovies from './fetch';

const apiMovies = new ApiMovies();

const searchValue = document.querySelector('header__search--input');
const galleryContainer = document.querySelector('.gallery-list');
const error = document.querySelector('.warning-message');

searchValue.addEventListener('submit', onSearchFilms);

async function onSearchFilms(e) {
  e.preventDefault();

  try {
    const searchFilm = searchValue.value.trim();
    apiMovies.query = searchFilm;
    if (apiMovies.query === '') {
      error.classList.remove('warning-message__hidden');
      setTimeout(() => error.classList.add('warning-message__hidden'), 3000);
      return;
    }
    await apiMovies.searchMovieByName().then(({ results, total_results }) => {
      clearGallaryContainer();
      render(results);

      if (results.length < 1) {
        error.classList.remove('warning-message__hidden');
        setTimeout(() => error.classList.add('warning-message__hidden'), 3000);
        return;
      }
    });
    searchValue.value = '';
  } catch (err) {
    console.log(err);
  }
}
function clearGallaryContainer() {
  const gallaryContainer = document.querySelector('.gallery-list');
  gallaryContainer.innerHTML = '';
}
