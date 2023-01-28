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
//заполнение модалки информацией
const modalFillihg = document.querySelector('.modal_without_close-btn');
openModal.addEventListener('click', onModalDataFilling);

function onModalDataFilling() {
  const modalData = JSON.parse(localStorage.getItem('key key key'));
  if (modalData) {
    for (let key in modalData) {
      modalFillihg.element[key].value = modalData[key];//не уверена по element
    }
  }
}
//кнопки переключатели
 //const LocalStorageEntry = new LocalStorageEntry(key);

 
 
//смена названия кнопки watch
 const watchBtnRef = document.querySelector('.btn_watched');
 const watchSpanEl = document.querySelector('.change_watch');
 watchBtnRef.addEventListener('click', onChangeTitleWatch);

 function onChangeTitleWatch() {
  //заменить проверку
   if (watchSpanEl.textContent == "add to Watched") {
     watchSpanEl.textContent = "remove from Watched";
   }
   else {
     watchSpanEl.textContent = "add to Watched";
   }
   setTimeout(() => {
     //вернуть цвет белий
     //watchBtnRef.style.backgroundColor = "#FFF";
   }, 2000);
 }
//смена названия кнопки queue
 const queueBtnRef = document.querySelector('.btn_queue');
 const queueSpanEl = document.querySelector('.change_queue');
 queueBtnRef.addEventListener('click', onChangeTitleQueue);

function onChangeTitleQueue() {
   //заменить проверку
   if (queueSpanEl.textContent == "add to queue") {
    queueSpanEl.textContent = "remove from queue";
   }
   else {
     queueSpanEl.textContent = "add to queue"
   }
 }
