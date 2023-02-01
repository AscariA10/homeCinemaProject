// import { cardList } from './card-draw.js';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import ApiMovies from './fetch.js';
// import Pagination from './pagination.js';

// const apiMovies = new ApiMovies();

// const galleryList = document.querySelector('.gallery-list');
// const errorMessage = document.querySelector('.warning-message');
// const formInput = document.querySelector('.js-search__form');

// formInput.addEventListener('submit', onSearchMovies);

// function onSearchMovies(evt) {
//   evt.preventDefault();
//   const value = evt.currentTarget.elements.searchInput.value.trim();
//   //   console.log(value);

//   if (value) {
//     clearMovieCardContainer();

//     apiMovies.pageNumber = 1;
//     apiMovies.searchMovieByName(value).then(data => {
//       // console.log(data);

//       if (!data.length) {
//         errorMessage.classList.remove('hidden');
//         errorMessage.textContent =
//           'No matches found for your query. Enter the properly name of the movie.';
//         clearMessage();

//         apiMovies.fetchTrendMovies().then(() => {
//           const pagination = new Pagination();
//           pagination.setFunction(apiMovies.fetchTrendMovies, apiMovies);
//           formInput.reset();
//         });
//       } else {
//         const pagination = new Pagination();
//         console.log(pagination);
//         pagination.setFunction(apiMovies.searchMovieByName, apiMovies, value);
//         //   cardList(data);
//         formInput.reset();
//       }
//     });
//   } else {
//     errorMessage.classList.remove('hidden');
//     errorMessage.textContent = 'Please, enter movie name to search.';
//     clearMessage();
//     return;
//   }

//   //-------------------------------------------------------------
//   // //  apiMovies.query = formInput.ariaValueMax.trim();
//   // event.preventDefault();
//   // errorMessage.classList.remove('.hidden');

//   // console.log(formInput.value);

//   // if (apiMovies.query !== '') {
//   //    apiMovies
//   //       .searchMovieByName()
//   //       .then(films => {
//   //          if (films.results.length < 1) {
//   //             errorMessage.classList.remove('.hidden');

//   //             setTimeout(() => {
//   //                errorMessage.classList.add('.hidden');
//   //             }, 3000);
//   //             return;
//   //          }
//   //          if (films.results.length > 1) {
//   //             errorMessage.classList.add('.hidden');

//   //             clearMovieCardContainer();

//   //             cardMarkup(films.results);

//   //             clearInput();
//   //          }
//   //       })
//   //       .catch(err => console.log(err));
//   // }
//   //----------------------------------------------------------------
// }
// // function clearInput() {
// //   formInput.innerHTML = '';
// // }
// function clearMovieCardContainer() {
//   galleryList.innerHTML = '';
// }
// // async function cardMarkup(data) {
// //   const markup = cardList(data).map(renderCard).join('');
// //   galleryList.innerHTML = markup;
// // }
// function clearMessage() {
//   setTimeout(() => {
//     errorMessage.classList.add('hidden');
//   }, 3000);
// }
//-------------------------Вадим-----------------------------------
// import { cardList } from './card-draw.js';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ApiMovies from './fetch.js';
import Pagination from './pagination.js';

const apiMovies = new ApiMovies();

const galleryList = document.querySelector('.gallery-list');
const errorMessage = document.querySelector('.warning-message');
const formInput = document.querySelector('.js-search__form');

formInput.addEventListener('submit', onSearchMovies);

function onSearchMovies(evt) {
  evt.preventDefault();
  const value = evt.currentTarget.elements.searchInput.value.trim();

  if (value) {
    //  clearMovieCardContainer();

    //  apiMovies.pageNumber = 1;
    const pagination = new Pagination(true);

    pagination.setFunction(apiMovies.searchMovieByName, apiMovies, value);
    formInput.reset();

    //  apiMovies.searchMovieByName(value).then(data => {
    //    // console.log(data);
    //    if (!data.length) {
    //      errorMessage.classList.remove('hidden');
    //      errorMessage.textContent =
    //        'Search result not successful. Enter the correct movie title.';
    //      pagination.setFunction(apiMovies.fetchTrendMovies, apiMovies);

    //      clearMessage();
    //    } else {
    //      pagination.setFunction(apiMovies.searchMovieByName, apiMovies, value);
    //    }

    //    formInput.reset();
    //  });
  } else {
    errorMessage.classList.remove('hidden');
    errorMessage.textContent = 'Please, enter movie name to search.';
    clearMessage();
    return;
  }
}

// function clearMovieCardContainer() {
//   galleryList.innerHTML = '';
// }

function clearMessage() {
  setTimeout(() => {
    errorMessage.classList.add('hidden');
  }, 3000);
}

export function fetchTrendFilms() {
  errorMessage.classList.remove('hidden');
  errorMessage.textContent =
    'Search result not successful. Enter the correct movie title.';
  const pagination = new Pagination(true);
  pagination.setFunction(apiMovies.fetchTrendMovies, apiMovies);

  clearMessage();
}
