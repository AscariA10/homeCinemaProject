// кнопка class="my-library__watched-btn current"
// кнопка class="modal-film__btn-watched"


// refs.js
// export const getRefs = () => {
// return { 
// watchedBtn:         document.querySelector('.my-library__watched-btn')
// modalWatchedBtn:    document.querySelector('.modal-film__btn-watched')
//   };
// };
// export const getRefsLocals = () => {
//   return {
// watched_ref:            document.querySelector('.my-library__watched-btn')
// add_to_watched_ref:     document.querySelector('.modal-film__btn-watched')
//   };
// };


// showPage.js

// import Notiflix  from "notiflix";

// export const showPageMyLibrary = (keyName) => {
//     Notiflix.Loading.pulse();
//     window.setTimeout(Notiflix.Loading.remove, 200);// для краси
//     const watchedArr = loadDataFromLS(keyName);
//     renderAllGallery(watchedArr);// перебирає обьект і виводить карточки фільмів
    
//     Notiflix.Notify.init({
//         position: 'center-top',
//         distance: '165px',
//     });
//         const alert = {
//       en: 'You have ' +watchedArr.length + ' films in your library "' +locals.getString(keyName+'_text') + '"',
//       ru: 'У тебя есть ' +watchedArr.length + ' фильма(ов) в библиотеке "' +locals.getString(keyName+'_text') + '"',
//       ua: 'У тебе є ' +watchedArr.length + ' фильми(ів) в переліку "' +locals.getString(keyName+'_text') + '"',
//     };
//     doNotification(alert.en, alert.ru, alert.ua, 'success');
// }


// onload.js
// import { changeHeader } from "./changeHeader"
// import { onSearchBoxChange } from "./searchBox"
// import { onWatchedButtonClick, onQueueButtonClick } from "./libraryButtons"
// import { onSearchButtonClick } from "./searchButton"
// import { addClass } from "./classWork";


// // функция по загрузке
// export const onLoad = refs => {

//     if (loaded) return;
//     changeHeader('HOME', refs.headerDivToChange);
//     doLocalization();
//     const currentLang = getLang();
//     const target = currentLang === 'eu-US' ? refs.engFlag : currentLang === 'ru-RU' ? refs.rusFlag : refs.ukrFlag;
//     addClass(target, 'current');
//     loaded = true;
// }

// export const loadListnersForHome = (refs) => {
//     //добавление обработчика событий инпута и кнопки поиска
//     refs.searchBox.addEventListener('keydown', onSearchBoxChange);
//     refs.searchButton.addEventListener('click', onSearchButtonClick);
// }

// export const removeListnersForHome = (refs) => {
//     //удаление обработчика событий инпута и кнопки поиска
//     if (refs.searchBox) refs.searchBox.removeEventListener('keydown', onSearchBoxChange);
//     if (refs.searchButton) refs.searchButton.removeEventListener('click', onSearchButtonClick);
// }

// export const loadListnersForMyLibrary = (refs) => {
//     // добавление обработчиков на кнопки WATCHED и QUEUE
//     refs.watchedBtn.addEventListener('click', onWatchedButtonClick);
//     refs.queueBtn.addEventListener('click', onQueueButtonClick);
// }

// export const removeListnersForMyLibrary = (refs) => {
//     //удаление обработчиков на кнопки WATCHED и QUEUE
//     if (refs.watchedBtn) refs.watchedBtn.removeEventListener('click', onWatchedButtonClick);
//     if (refs.queueBtn) refs.queueBtn.removeEventListener('click', onQueueButtonClick);
// }


// sectionFilmoteca/js
// import * as basicLightbox   from 'basiclightbox';
// import   modalFilmCardTpl   from '../partials/templates/modalFilmCard.hbs';
// import { getRefs }          from './refs';
// import { loadEscListner }   from './escClose';
// import { fetchGetMovieById} from './getContent';
// import { parseOneFilm }     from './parseApiData';
// import { doLocalization }   from './localization';
// import { locals }           from './consts';
// import { doOpenGenre }      from './genresWork';

// import { addMovieToLocalStorage, loadDataFromLS, removeMovieFromLocalStorage, } from './localStoragе';

// const refs = getRefs(); 
// /////////LISTNERS////////////////
// // const body = document.querySelector('body');
// refs.modalWatchedBtn.addEventListener('click', onAddToLS);
// refs.modalQueueBtn.addEventListener('click', onAddToLS);

// function getCurrentBase() {
//   const refs = getRefs();
//   if (refs.headerContainer.classList.value === 'header__container home') return 'tempQuery';
//   if (refs.headerContainer.classList.value === 'header__container my-library') {
//     if (refs.watchedBtn.classList.value === 'my-library__watched-btn current') return 'watched';
//     if (refs.queueBtn.classList.value === 'my-library__queue-btn current') return 'queue';
//   }
//   return 'tempQuery';
// }

// export const checkTargetModalCard = (e, instance) => {
//   if (e.target.nodeName === 'IMG') slider(e, getCurrentBase());
//   if (e.target.nodeName === 'A')  doOpenGenre(e.target.id, e.target.textContent, instance);
// }
// /////////END////////////////

// const instance = basicLightbox.create(refs.modalFilm, {
//     onShow: (instance) => {refs.body.style.overflow = 'hidden';},
//     onClose: (instance) => {refs.body.style.overflow = 'inherit';}
// });

// let cardItem = null;
// let isAdded = false;

// export const onFilmClick = e => {
//   let targetCard = e.target.parentNode.parentNode;
//   targetCard = targetCard.className === 'film' ? targetCard : targetCard.parentNode;
//   const targetCardId = targetCard.dataset.id;
//   if (e.target.id) { //проверка клик по жанрам
//     doOpenGenre(e.target.id, e.target.textContent, null);
//     return;
//   }
  
//   if (targetCard.className === 'film') {
//     // instance.show(() => console.log('lightbox now visible'));
//     instance.show();
//     doLocalization();
//     // обработка клика по модалке с фильмом
//     refs.modalCard.addEventListener('click', e => {
//       e.preventDefault;
//       checkTargetModalCard(e, instance); //from "./js/sectionFilmoteka"  клик по зоне модалки с фильмом
//     });  
//     // обработка клика по esc
//     loadEscListner(instance);
    
//     refs.modalFilmCloseBtn.addEventListener('click', e => {
//       e.preventDefault;
//       onFilmCloseClick(); //from "./js/footerDevelopers"  клик кнопке закрытия модалки
//     });
//     renderFilmCard(getFilmData(targetCardId, getCurrentBase()));
    
//     // проверяет, есть ли карточка в ЛС
//     checkAdd('watched', targetCardId, refs.modalWatchedBtn);
//     checkAdd('queue', targetCardId, refs.modalQueueBtn);
    
//     return;
//   }
// };

// function findAndAddPrevNext(currentArray, targetCardId) {
//     let cardItem;
//   for (let i = 0; i < currentArray.length; i++) {
//       // находит целевую карточку фильма в целевом массиве фильмаов
//     if (currentArray[i].id === Number(targetCardId)) {
//       let prev = (i === 0) ? currentArray.length-1 : i - 1;
//       let cur = i;
//       let next = (i === currentArray.length-1) ? 0 : i + 1;

//       cardItem = currentArray[i];
//       //для слайдера
//       cardItem.ids = {
//         prev: currentArray[prev].id,
//         cur: currentArray[cur].id,
//         next: currentArray[next].id,
//       }
//       cardItem.posters = {
//         prev: currentArray[prev].poster_path,
//         cur: currentArray[cur].poster_path,
//         next: currentArray[next].poster_path,
//       }
//       // end
//       i = currentArray.length; // выходит из цикла
//     }
//   }
//   return cardItem;
// }

// function slider(e, baseLS) {
//   e.preventDefault;
//   const refs = getRefs();
//   if (e.target.className === 'modal-card__image modal-card__image--next' || e.target.className === 'modal-card__image modal-card__image--prev') {
//     const targetCardId = e.target.id
//     const currentArray = JSON.parse(localStorage.getItem(baseLS));
//     cardItem = findAndAddPrevNext(currentArray, targetCardId);
//     renderFilmCard(cardItem);
//     // проверяет, есть ли карточка в ЛС
//     checkAdd('watched', targetCardId, refs.modalWatchedBtn);
//     checkAdd('queue', targetCardId, refs.modalQueueBtn);
//   }
// }

// function getFilmData(targetCardId, base = 'tempQuery') {
//   const localStorageArray = JSON.parse(localStorage.getItem(base));
//   // находит объект по айди, проверка на наличие фильма в временном хранилище
//     cardItem = findAndAddPrevNext(localStorageArray, targetCardId);
  
//   if (cardItem) {
//     // console.log('выполняется, если cardItem НЕ null, фильм есть в временном LS', cardItem);
//     isAdded = true;
//     return cardItem;
//   }

//   findCardItem(targetCardId).then(cardItem => {
//     // console.log('выполняется, если cardItem null, фильма нет в временном LS', cardItem);
//     // renderFilmCard(cardItem);
//     return cardItem;
//   });
// }

// function findCardItem(targetCardId) {
//   return fetchGetMovieById(targetCardId).then(data => {
//     cardItem = findAndAddPrevNext(data, targetCardId);
//     cardItem.genre_ids = data.genres.map(genre => genre.id);
//     return parseOneFilm(cardItem);
//   });
// }

// const onFilmCloseClick = () => {
//   instance.close();

//   //убирает инлайн стили на кнопках в модалке и с body по закрытию
//   refs.modalWatchedBtn.style.color = 'inherit';
//   refs.modalWatchedBtn.style.backgroundColor = 'inherit';
//   refs.modalQueueBtn.style.color = 'inherit';
//   refs.modalQueueBtn.style.backgroundColor = 'inherit';

//   refs.body.style.overflow = 'inherit';
// };

// function renderFilmCard(filmCard) {
//   const refs = getRefs();
//   refs.modalCard.innerHTML = modalFilmCardTpl(filmCard);
//   doLocalization();
// }

// // добавляет или удаляет из LS
// function onAddToLS(e) {
//   const targetBtn = e.target;
//   const localStorageKey = targetBtn === refs.modalWatchedBtn ? 'watched' : 'queue';
//   const filmId = targetBtn.parentNode.previousElementSibling.children[2].dataset.id;
//   const currentDataArray = loadDataFromLS(localStorageKey);

//   if (currentDataArray.find(film => film.id === Number(filmId)) !== undefined) {
//     // console.log('есть в лс, удаляем');
//     removeMovieFromLocalStorage(localStorageKey, getFilmData(filmId, getCurrentBase()));
//     isAdded = false;
//     changeBtnStyle(targetBtn, localStorageKey);
//   } else {
//     // console.log('нет в лс, добавляем');
//     addMovieToLocalStorage(localStorageKey, getFilmData(filmId, getCurrentBase()));
//     isAdded = true;
//     changeBtnStyle(targetBtn, localStorageKey);
//   }
// }

// // проверяет, есть ли фильм под соответствующим ключом в LS
// function checkAdd(localStorageKey, targetCardId, targetBtn) {
//   if (loadDataFromLS(localStorageKey).some(film => film.id === Number(targetCardId))) {
//     isAdded = true;
//   } else isAdded = false;
//   changeBtnStyle(targetBtn, localStorageKey);
// }



// libraryButtons.js
// import { hidePagination, showPageMyLibrary} from './showPage'
// import { getRefs } from './refs';
// import { tooggleClassCurrent} from './classWork';


// export const onWatchedButtonClick = e => {
//     e.preventDefault;
//     showPageMyLibrary('watched');
//     const ref = getRefs()
//     hidePagination(ref);
//     tooggleClassCurrent(ref.watchedBtn, ref.queueBtn);
// }

