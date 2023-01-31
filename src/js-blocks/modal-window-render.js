import Api from './fetch';
import img from '../images/replace.jpg';
import { LocalStorageEntry } from './localStorageEntry';

const api = new Api();

const watchedMoviesStorage = new LocalStorageEntry('watchedMoviesStorage'); 
const queueMoviesStorage = new LocalStorageEntry('queueMoviesStorage');  

export const refs = {
   filmList: document.querySelector('.gallery-list'),
   modalFilm: document.getElementById('modal-single-film'),
};

refs.filmList.addEventListener('click', onFilmCardClick);

let GlodObj = {};///

async function onFilmCardClick(e) {
   e.preventDefault();
   /**  search for the nearest ancestor with the class .gallery-card and get the id from it */
  const filmId = e.target.closest('.gallery-card').dataset.id;
  if (filmId) {
    /**  query for a single movie by id  */
    filmData = await api.fetchMovieFullDetails(filmId); //@TODO: переделать на локал сторадж!!!
    GlodObj.movie = filmData;/////////
    GlodObj.id = filmId;/////////
    /**  Creating the markup for the modal window  */
    const markup = ceateModalMarkup(filmData);
    /**  Modal window renderer  */
    renderModal(markup, refs.modalFilm);
    openModal();
  }
}
function ceateModalMarkup(film) {
   const {
      title,
      original_title,
      overview,
      poster_path,
      popularity,
      vote_average,
      vote_count,
      genres,
      id,
  } = film;
  
   const normalizeGenres = genres.map(({ name }) => name).join(', ');
   return `<div class="backdrop js-backdrop">
  <div class="modal_window">
    <button
      type="button"
      class="modal_btn_close"
      id="btn_mdl_cls"
      data-action="close-modal"
    >
      <svg
        class="modal_icon_close"
        width="14"
        height="14"
        aria-label="icon close"
      >
        <use href="./images/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal_without_close-btn">
      <img src=${
         poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : img
      } alt="Poster" class="modal_img" />
      <div class="modal_description">
        <h1 class="modal_title">${title}</h1>
        <table class="modal_tbl">
          <tr>
            <td class="modal_tbl_left-side" width="50%">Vote / Votes</td>
            <td class="modal_tbl_right_top vote" width="10%">
            ${vote_average.toFixed(1)}
            </td>
            <td class="modal_tbl_right_top" width="40%">/
            ${Math.round(vote_count)}
            </td>
          </tr>
          <tr>
            <td class="modal_tbl_left-side">Popularity</td>
            <td class="modal_tbl_right_top" colspan="2">
            ${popularity.toFixed(1)}
            </td>
          </tr>
          <tr>
            <td class="modal_tbl_left-side">Original Title</td>
            <td class="modal_tbl_right_title" colspan="2">
            ${original_title}
            </td>
          </tr>
          <tr>
            <td class="modal_tbl_left-side">Genres</td>
            <td class="modal_tbl_right_genre" colspan="2">
              ${normalizeGenres}
            </td>
          </tr>
        </table>
        <h2 class="modal_title_text">ABOUT</h2>
        <p class="modal_text">${overview}</p>
        <ul class="btn_list">
          <li>
            <button type="button" class="btn_choice btn_watched">
              <span class="change_watch">add to watched</span>
            </button>
          </li>
          <li>
            <button type="button" class="btn_choice btn_queue">
              <span class="change_queue">add to queue</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>`;
}
function openModal() {
   const closeModalBtnRef = document.querySelector('[data-action="close-modal"]');
   const backdrop = document.querySelector('.js-backdrop');

   closeModalBtnRef.addEventListener('click', onCloseModal);
   backdrop.addEventListener('click', onBackdropClick);
   window.addEventListener('keydown', onEscPress);
   document.body.classList.add('show-modal');
   
  watchedMoviesStorage.getLocalStorageEntry();
  

//watch
const watchBtnRef = document.querySelector('.btn_watched');
const watchSpanEl = document.querySelector('.change_watch');
  watchBtnRef.addEventListener('click', onChangeTitleWatch);
  
    let myMovie = GlodObj.movie
    let myIdMovie = GlodObj.id;//////

  const arrWatchLocal = watchedMoviesStorage.getLocalStorageEntry();
 
  arrWatchLocal.forEach(({ id }) => {
         if (id === Number(myIdMovie)) {
       watchSpanEl.textContent = 'remove from watched';
     }
 });
  function onChangeTitleWatch() {
  //watchedMoviesStorage.updateLocalStorageEntry();
   if (watchSpanEl.textContent == 'add to watched') {
      watchSpanEl.textContent = 'remove from watched';
      watchedMoviesStorage.addMovieToLocalStorage(myMovie);
   } else {
     arrWatchLocal.forEach(({ id }) => {
       if (id === Number(myIdMovie)) {
       watchSpanEl.textContent = 'add to watched';
      watchedMoviesStorage.deleteMovieFromLocalStorage(myMovie);
       console.log('совпали номера', id, '=', Number(myIdMovie));
     }
 });
      
   }
  }
  // queue
  
const queueBtnRef = document.querySelector('.btn_queue');
const queueSpanEl = document.querySelector('.change_queue');
queueBtnRef.addEventListener('click', onChangeTitleQueue);
 //queueMoviesStorage.updateLocalStorageEntry();

 const arrQueueLocal = queueMoviesStorage.getLocalStorageEntry();
    arrQueueLocal.forEach(({ id }) => {
         if (id === Number(myIdMovie)) {
       queueSpanEl.textContent = 'remove from queue';
     }
 });
  function onChangeTitleQueue() {
   
  if (queueSpanEl.textContent == 'add to queue'){
      queueSpanEl.textContent = 'remove from queue';
      queueMoviesStorage.addMovieToLocalStorage(myMovie);
   } else {
     arrQueueLocal.forEach(({ id }) => {
       if (id === Number(myIdMovie)) {
       queueSpanEl.textContent = 'add to queue';
       queueMoviesStorage.deleteMovieFromLocalStorage(myMovie);
       console.log('совпали номера', id, '=', Number(myIdMovie));
     }
 });
      
   }
}

}

function onCloseModal() {
   const closeModalBtnRef = document.querySelector('[data-action="close-modal"]');
   const backdrop = document.querySelector('.js-backdrop');
   closeModalBtnRef.removeEventListener('click', onCloseModal);
   backdrop.removeEventListener('click', onBackdropClick);

   window.removeEventListener('keydown', onEscPress);
   document.body.classList.remove('show-modal');
   clearModal(refs.modalFilm);
}

function onBackdropClick(evt) {
   if (evt.currentTarget === evt.target) {
      onCloseModal();
      clearModal(refs.modalFilm);
   }
}
function onEscPress(evt) {
   if (evt.code === 'Escape') {
      onCloseModal();
      clearModal(refs.modalFilm);
   }
}
/** this method renders the layout of the modal window in <div id="modal-single-film"></div>   */
function renderModal(markup, renderParrent) {
   renderParrent.insertAdjacentHTML('beforeend', markup);
}
/** this method removes the modal window markup from the <div id="modal-single-film"></div>  */
function clearModal(rootModal) {
   rootModal.innerHTML = '';
}
