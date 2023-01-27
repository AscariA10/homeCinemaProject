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
// определение названия кнопки watch
const watchBtnRef = document.querySelector('.but_watced');
//if(!поле === Watched){
watchBtnRef.insertAdjacentHTML("afterbegin", "<span class='add_watch'>add to Watched </span>");
//}
//else{
//watchBtnRef.insertAdjacentHTML("afterbegin", "<span class='remove_watch'>remove from Watched </span>");
//}
const watchSpanEl = document.querySelector('.add_watch');
const watchRemSpanEl = document.querySelector('.remove_watch');
//смена названия кнопки watch
watchBtnRef.addEventListener('click', onChangeTitleWatch);

function onChangeTitleWatch() {
  if (watchSpanEl) {
    watchBtnRef.removeChild(watchBtnRef.firstChild);
    watchBtnRef.insertAdjacentHTML("afterbegin", "<span class='remove_watch'>remove from Watched </span>");
  }
  else {
    watchBtnRef.removeChild(watchBtnRef.firstChild);
    watchBtnRef.insertAdjacentHTML("afterbegin", "<span class='add_watch'>add to Watched </span>");
  }
  setTimeout(() => {
    //вернуть цвет белий
    //watchBtnRef.style.backgroundColor = "#FFF";
  }, 2000);
}
// определение названия кнопки queue
const queueBtnRef = document.querySelector('.but_queue');
//if(!поле === Watched){
//queueBtnRef.insertAdjacentHTML("afterbegin", "<span class='add_queue'>add to queue </span>");
//}
//else{
queueBtnRef.insertAdjacentHTML("afterbegin", "<span class='remove_queue'>remove from queue </span>");
//}
const QueueSpanEl = document.querySelector('.add_queue');
const remQueueSpanEl = document.querySelector('.remove_queue');
//смена названия кнопки queue
queueBtnRef.addEventListener('click', onChangeTitleQueue);

function onChangeTitleQueue() {
  if (QueueSpanEl) {
    queueBtnRef.removeChild(queueBtnRef.firstChild);
    queueBtnRef.insertAdjacentHTML("afterbegin", "<span class='remove_queue'>remove from queue </span>");
  }
  else {
    queueBtnRef.removeChild(queueBtnRef.firstChild);
    queueBtnRef.insertAdjacentHTML("afterbegin", "<span class='add_queue'>add to queue </span>");
  }
}