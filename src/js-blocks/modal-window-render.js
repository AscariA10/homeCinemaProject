import Api from './fetch';
import img from '../images/replace.jpg';
import { LocalStorageEntry } from './localStorageEntry';

const api = new Api();

const watchedMoviesStorage = new LocalStorageEntry('watchedMoviesStorage');
const queueMoviesStorage = new LocalStorageEntry('queueMoviesStorage');

const BTN_TITLE_ADD_TO_WATCH = 'add to watch';
const BTN_TITLE_REMOVE_FROM_WATCH = 'remove from watch';
const BTN_TITLE_ADD_TO_QUEUE = 'add to queue';
const BTN_TITLE_REMOVE_FROM_QUEUE = 'remove from queue';

function getDataById(data, key, value) {
   return data.find(el => el[key] === value);
}

export const refs = {
   filmList: document.querySelector('.gallery-list'),
   modalFilm: document.getElementById('modal-single-film'),
};

refs.filmList.addEventListener('click', onFilmCardClick);

let GlodObj = {}; ///

async function onFilmCardClick(e) {
   e.preventDefault();
   /**  search for the nearest ancestor with the class .gallery-card and get the id from it */
   const filmId = e.target.closest('.gallery-card').dataset.id;
   if (filmId) {
      /**  query for a single movie by id  */

      filmData = await api.fetchMovieFullDetails(filmId); //@TODO: переделать на локал сторадж!!!
      GlodObj.movie = filmData; /////////
      GlodObj.id = filmId; /////////

      const filmTrailer = await api.fetchMovieTrailer(filmId);
      // console.log(filmTrailer[1].key);
      /**  Creating the markup for the modal window  */
      const markup = ceateModalMarkup(filmData, filmTrailer[1].key);

      /**  Modal window renderer  */
      renderModal(markup, refs.modalFilm);
      openModal();
   }
}

function ceateModalMarkup(film, trailer) {
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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d="M0.371 2.165c-0.495-0.495-0.495-1.298 0-1.793s1.298-0.495 1.793 0l13.835 13.835 13.835-13.835c0.495-0.495 1.298-0.495 1.794 0s0.495 1.298 0 1.793l-13.836 13.835 13.835 13.835c0.495 0.495 0.495 1.298 0 1.793s-1.298 0.495-1.794 0l-13.835-13.835-13.835 13.835c-0.495 0.495-1.298 0.495-1.793 0s-0.495-1.298 0-1.793l13.835-13.835-13.835-13.835z"></path>
      </svg>
    </button>
    <div class="modal_without_close-btn">
      <img src=${
         poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : img
      } alt="Poster" class="modal_img" />
      <a href="https://www.youtube.com/watch?v=${trailer}" target="_blank" class="modal_trailer_link is-hidden"> Watch trailer</a>
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

   const modalImg = document.querySelector('.modal_without_close-btn .modal_img');

   closeModalBtnRef.addEventListener('click', onCloseModal);
   modalImg.addEventListener('mouseover', onMouseOverModalImg);
   backdrop.addEventListener('click', onBackdropClick);
   window.addEventListener('keydown', onEscPress);

   document.body.classList.add('show-modal');

   watchAction();
   queueAction();
}

function watchAction() {
   const { movie, id } = GlodObj;

   const arrWatchLocal = watchedMoviesStorage.getLocalStorageEntry() ?? [];

   const movieInWatch = getDataById(arrWatchLocal, 'id', Number(id));

   let BTN_ACTION_WATCH = !!movieInWatch ? BTN_TITLE_REMOVE_FROM_WATCH : BTN_TITLE_ADD_TO_WATCH;

   const watchBtnRef = document.querySelector('.btn_watched');
   const watchSpanEl = document.querySelector('.change_watch');
   watchBtnRef.addEventListener('click', onChangeTitleWatch);

   watchSpanEl.textContent = BTN_ACTION_WATCH;

   function onChangeTitleWatch() {
      if (BTN_ACTION_WATCH === BTN_TITLE_ADD_TO_WATCH) {
         watchedMoviesStorage.addMovieToLocalStorage(movie);
         BTN_ACTION_WATCH = BTN_TITLE_REMOVE_FROM_WATCH;
         watchSpanEl.textContent = BTN_ACTION_WATCH;
         return;
      }
      watchedMoviesStorage.deleteMovieFromLocalStorage(movie);
      BTN_ACTION_WATCH = BTN_TITLE_ADD_TO_WATCH;
      watchSpanEl.textContent = BTN_ACTION_WATCH;
   }
}

function queueAction() {
   const { movie, id } = GlodObj;

   const arrQueueLocal = queueMoviesStorage.getLocalStorageEntry() ?? [];

   const movieInQueue = getDataById(arrQueueLocal, 'id', Number(id));

   let BTN_ACTION_QUEUE = !!movieInQueue ? BTN_TITLE_REMOVE_FROM_QUEUE : BTN_TITLE_ADD_TO_QUEUE;

   const queueBtnRef = document.querySelector('.btn_queue');
   const queueSpanEl = document.querySelector('.change_queue');
   queueBtnRef.addEventListener('click', onChangeTitleQueue);

   queueSpanEl.textContent = BTN_ACTION_QUEUE;

   function onChangeTitleQueue() {
      if (BTN_ACTION_QUEUE === BTN_TITLE_ADD_TO_QUEUE) {
         queueMoviesStorage.addMovieToLocalStorage(movie);
         BTN_ACTION_QUEUE = BTN_TITLE_REMOVE_FROM_QUEUE;
         queueSpanEl.textContent = BTN_ACTION_QUEUE;
         return;
      }
      queueMoviesStorage.deleteMovieFromLocalStorage(movie);
      BTN_ACTION_QUEUE = BTN_TITLE_ADD_TO_QUEUE;
      queueSpanEl.textContent = BTN_ACTION_QUEUE;
   }

   document.body.classList.add('show-modal');
}

function onMouseOverModalImg() {
   const modalTrailerLink = document.querySelector('.modal_trailer_link');
   modalTrailerLink.classList.remove('is-hidden');
}

function onCloseModal() {
   const closeModalBtnRef = document.querySelector('[data-action="close-modal"]');
   const backdrop = document.querySelector('.js-backdrop');

   const modalImg = document.querySelector('.modal_without_close-btn .modal_img');

   closeModalBtnRef.removeEventListener('click', onCloseModal);
   backdrop.removeEventListener('click', onBackdropClick);
   modalImg.removeEventListener('mouseover', onMouseOverModalImg);

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
