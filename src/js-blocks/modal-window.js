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
function onEscPress(evt) {
   if (evt.code === 'Escape') {
      onCloseModal();
   }
}

//смена названия кнопки watch
const watchBtnRef = document.querySelector('.btn_watched');
const watchSpanEl = document.querySelector('.change_watch');
watchSpanEl.addEventListener('click', onChangeTitleWatch);

function onChangeTitleWatch(evt) {
   if (watchSpanEl.textContent == 'add to Watched') {
      watchSpanEl.textContent = 'remove from Watched';
   } else {
      watchSpanEl.textContent = 'add to Watched';
   }
   //  setTimeout(() => {
   //   watchBtnRef.style.cssText = 'backgroundColor: #fff; color: #000; border: 1px solid black';
   //  }, 1000);
}
//смена названия кнопки queue
const queueBtnRef = document.querySelector('.btn_queue');
const queueSpanEl = document.querySelector('.change_queue');
queueBtnRef.addEventListener('click', onChangeTitleQueue);

function onChangeTitleQueue() {
   if (queueSpanEl.textContent == 'add to queue') {
      queueSpanEl.textContent = 'remove from queue';
   } else {
      queueSpanEl.textContent = 'add to queue';
   }
}
//заполнение модалки информацией

//кнопки переключатели
//const LocalStorageEntry = new LocalStorageEntry(key);
