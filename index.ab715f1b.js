var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var d={id:e,exports:{}};return t[e]=d,n.call(d.exports,d,d.exports),d.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var d=n("7Pc5D");const c=document.querySelector('[data-action="open-modal"]'),r=document.querySelector('[data-action="close-modal"]'),a=document.querySelector(".js-backdrop");function i(){window.removeEventListener("keydown",u),document.body.classList.remove("show-modal")}function u(e){"Escape"===e.code&&i()}c.addEventListener("click",(function(){window.addEventListener("keydown",u),document.body.classList.add("show-modal")})),r.addEventListener("click",i),a.addEventListener("click",(function(e){e.currentTarget===e.target&&i()}));const l={theme:"dark",isAuthenticated:!0,options:[1,2,3]},s=document.querySelector(".btn_watched"),f=document.querySelector(".change_watch");s.addEventListener("click",(function(){"add to Watched"==f.textContent?(f.textContent="remove from Watched",m.addMovieToLocalStorage(l)):(f.textContent="add to Watched",m.deleteMovieFromLocalStorage(l))}));const m=new(0,d.LocalStorageEntry)("Watch");m.updateLocalStorageEntry();const v=document.querySelector(".btn_queue"),y=document.querySelector(".change_queue");v.addEventListener("click",(function(){"add to queue"==y.textContent?(y.textContent="remove from queue",w.addMovieToLocalStorage(l)):(y.textContent="add to queue",w.deleteMovieFromLocalStorage(l))}));const w=new(0,d.LocalStorageEntry)("Queue");w.updateLocalStorageEntry();
//# sourceMappingURL=index.ab715f1b.js.map