

const openModal = document.querySelector('[data-action="open-modal"]');
const closeModalBtnRef = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');

openModal.addEventListener('click', onOpenModal);
closeModalBtnRef.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdrop);

function onOpenModal() {
  window.addEventListener('keydown', onEscPress);
  document.body.classList.add('show-modal');
}
function onCloseModal() {
  window.removeEventListener('keydown', onEscPress);
  document.body.classList.remove('show-modal');
}
function onBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}
function onEscPress(evt){
  if(evt.code === 'Escape'){
    onCloseModal();
  }
}
//фильм1 для теста
const movie = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
const movie222 = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
//watch
 const watchBtnRef = document.querySelector('.btn_watched');
 const watchSpanEl = document.querySelector('.change_watch');
 watchBtnRef.addEventListener('click', onChangeTitleWatch);
 
 import {LocalStorageEntry} from './localStorageEntry';
 const watch = new LocalStorageEntry("Watch");
 watch.updateLocalStorageEntry();

function onChangeTitleWatch() {
   if (watchSpanEl.textContent == "add to Watched") {
     watchSpanEl.textContent = "remove from Watched";
     watch.addMovieToLocalStorage(movie);
     //watch.addMovieToLocalStorage(movie222);
   }
   else {
    watchSpanEl.textContent = "add to Watched";
    watch.deleteMovieFromLocalStorage(movie);
   }
  }
// queue
 const queueBtnRef = document.querySelector('.btn_queue');
 const queueSpanEl = document.querySelector('.change_queue');
 queueBtnRef.addEventListener('click', onChangeTitleQueue);
 
const queue = new LocalStorageEntry("Queue");
queue.updateLocalStorageEntry();

function onChangeTitleQueue() {
  if (queueSpanEl.textContent == "add to queue") {
    
    queueSpanEl.textContent = "remove from queue";
    queue.addMovieToLocalStorage(movie);
   }
   else {
    queueSpanEl.textContent = "add to queue";
    queue.deleteMovieFromLocalStorage(movie);
   }
 }






