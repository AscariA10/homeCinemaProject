!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var o=i("ds8z5"),a=i("bpxeT"),s=i("8MBJY"),c=i("a2hTj"),u=i("hKHmD"),d=i("eYQtU"),f=i("8nrFW"),l=i("2MbLg"),m=i("2TvXO"),p=i("j48wp"),v=i("5TdHc"),g=i("hPmKD"),h=i("bfMjj"),y=i("h6c0i"),w=i("3Xg1D");i("fpSkj"),i("7PfXb"),i("3XDyW");var b={},M=i("l5bVx"),P=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,k=/^0o[0-7]+$/i,F=parseInt,L="object"==typeof t&&t&&t.Object===Object&&t,S="object"==typeof self&&self&&self.Object===Object&&self,j=L||S||Function("return this")(),R=Object.prototype.toString,O=Math.max,z=Math.min,E=function(){return j.Date.now()};function N(t){var n=void 0===t?"undefined":e(M)(t);return!!t&&("object"==n||"function"==n)}function q(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(M)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==R.call(t)}(t))return NaN;if(N(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=N(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(P,"");var r=T.test(t);return r||k.test(t)?F(t.slice(2),r?2:8):x.test(t)?NaN:+t}b=function(e,t,n){var r,i,o,a,s,c,u=0,d=!1,f=!1,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function p(e){return u=e,s=setTimeout(g,t),d?m(e):a}function v(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-u>=o}function g(){var e=E();if(v(e))return h(e);s=setTimeout(g,function(e){var n=t-(e-c);return f?z(n,o-(e-u)):n}(e))}function h(e){return s=void 0,l&&r?m(e):(r=i=void 0,a)}function y(){var e=E(),n=v(e);if(r=arguments,i=this,c=e,n){if(void 0===s)return p(c);if(f)return s=setTimeout(g,t),m(c)}return void 0===s&&(s=setTimeout(g,t)),a}return t=q(t)||0,N(n)&&(d=!!n.leading,o=(f="maxWait"in n)?O(q(n.maxWait)||0,t):o,l="trailing"in n?!!n.trailing:l),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=c=i=s=void 0},y.flush=function(){return void 0===s?a:h(E())},y};var D=new(0,h.LocalStorageEntry)("watchedMoviesStorage"),W=new(0,h.LocalStorageEntry)("queueMoviesStorage"),C=new(0,p.default),H=document.querySelector(".notification-wrapper"),X=document.querySelector("#watched"),Y=document.querySelector("#queue");window.addEventListener("DOMContentLoaded",K),X.addEventListener("click",K),Y.addEventListener("click",(function(e){return I.apply(this,arguments)}));var $=function(){"use strict";function t(){e(s)(this,t);var n=this;e(u)(this,"renderRecommendedFilms",e(a)(e(m).mark((function t(){var r;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.fetchTrendMovies();case 2:r=t.sent,(0,v.cardList)(e(f)(r).splice(0,n.countFilmsPerPage)),(0,w.animScroll)();case 5:case"end":return t.stop()}}),t)})))),this.page=1,this.resize(),this.calculateTotalPages()}return e(c)(t,[{key:"pageNumber",get:function(){return this.page},set:function(e){this.page=e}},{key:"totalPagesNumber",get:function(){return this.totalPages}},{key:"resize",value:function(){var e=window.innerWidth;return e!==this.viewportWidth&&(this.viewportWidth=e,e<=767&&(this.countFilmsPerPage=4),e>=768&&(this.countFilmsPerPage=8),e>=1280&&(this.countFilmsPerPage=9),!0)}},{key:"calculateTotalPages",value:function(){this.movies=this.getMoviesFromLocalStorage();var e=this.movies.length,t=Math.ceil(e/this.countFilmsPerPage);this.totalPages=t}},{key:"getMovies",value:function(){return e(f)(this.movies).splice((this.page-1)*this.countFilmsPerPage,this.countFilmsPerPage)}}]),t}(),_=function(t){"use strict";e(d)(r,t);var n=e(l)(r);function r(){var t;e(s)(this,r),t=n.apply(this,arguments);var i=e(o)(t);return e(u)(e(o)(t),"renderRecommended",e(a)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.Notify.info("You haven't added any movie to watched yet. Let's do it!"),'<span class="recommended-films">Recommended films</span>',H.innerHTML='<span class="recommended-films">Recommended films</span>',i.renderRecommendedFilms();case 4:case"end":return e.stop()}}),t)})))),t}return e(c)(r,[{key:"getMoviesFromLocalStorage",value:function(){return D.getLocalStorageEntry()||[]}}]),r}($),U=function(t){"use strict";e(d)(r,t);var n=e(l)(r);function r(){var t;e(s)(this,r),t=n.apply(this,arguments);var i=e(o)(t);return e(u)(e(o)(t),"renderRecommended",e(a)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.Notify.info("You haven't added any movie to queue yet. Let's do it!"),'<span class="recommended-films">Recommended films</span>',H.innerHTML='<span class="recommended-films">Recommended films</span>',i.renderRecommendedFilms();case 4:case"end":return e.stop()}}),t)})))),t}return e(c)(r,[{key:"getMoviesFromLocalStorage",value:function(){return W.getLocalStorageEntry()||[]}}]),r}($);function K(e){return B.apply(this,arguments)}function B(){return(B=e(a)(e(m).mark((function t(n){var r,i,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Y.style.backgroundColor="transparent",X.style.backgroundColor="#ff6b01",r=new _,i=new(0,g.default),r.getMovies().length){e.next=9;break}return e.next=7,r.renderRecommended();case 7:return window.onresize=b((function(){r.resize()&&r.renderRecommended()}),500),e.abrupt("return");case 9:H.innerHTML="",i.setFunction(r.getMovies,r),o=b((function(){r.resize()&&(r.calculateTotalPages(),i.setFunction(r.getMovies,r))}),500),window.onresize=o;case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function I(){return(I=e(a)(e(m).mark((function t(n){var r,i,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(X.style.backgroundColor="transparent",Y.style.backgroundColor="#ff6b01",r=new U,i=new(0,g.default),r.getMovies().length){e.next=9;break}return e.next=7,r.renderRecommended();case 7:return window.onresize=b((function(){r.resize()&&r.renderRecommended()}),500),e.abrupt("return");case 9:H.innerHTML="",i.setFunction(r.getMovies,r),o=b((function(){r.resize()&&(r.calculateTotalPages(),i.setFunction(r.getMovies,r))}),500),window.onresize=o;case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}}();
//# sourceMappingURL=library.83dee0ed.js.map
