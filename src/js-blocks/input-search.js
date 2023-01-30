import { renderCard } from './card-draw';
import ApiMovies from './fetch';

const apiMovies = new ApiMovies();

const galleryList = document.querySelector('.gallery-list');
const errorMessage = document.querySelector('.warning-message');
const formInput = document.querySelector('.js-search__input');

formInput.addEventListener('submit', onSearchMovies);

function onSearchMovies(e) {
  apiMovies.query = formInput.ariaValueMax.trim();
  e.preventDefault();
  errorMessage.classList.remove('.hidden');

  if (apiMovies.query !== '') {
    apiMovies
      .searchMovieByName()
      .then(films => {
        if (films.results.length < 1) {
          errorMessage.classList.remove('.hidden');

          setTimeout(() => {
            errorMessage.classList.add('.hidden');
          }, 3000);
          return;
        }
        if (films.results.length > 1) {
          errorMessage.classList.add('.hidden');

          clearMovieCardContainer();

          cardMarkup(films.results);

          clearInput();
        }
      })
      .catch(err => console(err));
  }
}
function clearInput() {
  formInput.innerHTML = '';
}
function clearMovieCardContainer() {
  galleryList.innerHTML = '';
}
async function cardMarkup(data) {
  const markup = cardList(data).map(renderCard).join('');
  galleryList.innerHTML = markup;
}
