!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i),i.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),i.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),i.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var r=i("bpxeT"),o=i("8MBJY"),s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){var n=l.default(e,t,"get");return c.default(e,n)};var l=u(i("1UHsN")),c=u(i("ffZzF"));function u(e){return e&&e.__esModule?e:{default:e}}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,n){f.default(e,t),t.set(e,n)};var d,f=(d=i("5k7tO"))&&d.__esModule?d:{default:d};var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t){_.default(e,t),t.add(e)};var _=function(e){return e&&e.__esModule?e:{default:e}}(i("5k7tO"));var h=i("hKHmD"),b=i("8nrFW"),m=i("2TvXO"),w=i("j48wp"),y=document.querySelector(".gallery-list"),x=(new(0,w.default),function(e){var t=e.title,n=e.release_date,a=e.poster_path,i=e.vote_average,r=a?"".concat("https://image.tmdb.org/t/p/w500").concat(a):"https://images.prom.ua/211029177_w640_h640_211029177.jpg",o=n?new Date(n).getFullYear():"No information",s=i.toFixed(2);return M(t,r,o,s)}),M=function(e,t,n,a){return'<li class="gallery-card list">\n        <a href="">\n          <img class=\'card-img\' src="'.concat(t,'" alt="').concat(e,'">\n        </a>\n        <p class="card-title">').concat(e,'</p>\n        <p class="card-ganre"></p>\n        <p class="card-release">').concat(n,'</p>\n        <p class="card-average">').concat(a,"</p>\n        </li>")},P=(w=i("j48wp"),new WeakMap),k=new WeakMap,T=new WeakMap,j=new WeakMap,L=new WeakSet,O=new WeakSet,N=function t(n,a){"use strict";var i=this;e(o)(this,t),e(v)(this,L),e(v)(this,O);var l,c=this;e(h)(this,"setFunction",(l=e(r)(e(m).mark((function t(n){var a,i,r,o,l=arguments;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=l.length,i=new Array(a>1?a-1:0),r=1;r<a;r++)i[r-1]=l[r];c.fn=(o=n).bind.apply(o,e(b)(i)),c.linkToIntance=i[0],e(s)(c,j).call(c);case 5:case"end":return t.stop()}}),t)}))),function(e){return l.apply(this,arguments)})),e(p)(this,P,{writable:!0,value:function(t){i.page--,e(s)(i,j).call(i),e(g)(i,O,E).call(i,i.page,i.totalPages),e(g)(i,L,A).call(i)}}),e(p)(this,k,{writable:!0,value:function(t){i.page++,e(s)(i,j).call(i),e(g)(i,O,E).call(i,i.page,i.totalPages),e(g)(i,L,A).call(i)}}),e(p)(this,T,{writable:!0,value:function(t){i.classes=e(b)(t.target.classList),i.classes.includes("pagination__dots")||i.classes.includes("pagination__list")||i.classes.includes("pagination__number_current")||(i.page=Number(t.target.innerText),e(s)(i,j).call(i),e(g)(i,O,E).call(i,i.page,i.totalPages),e(g)(i,L,A).call(i))}});var u=this;e(p)(this,j,{writable:!0,value:e(r)(e(m).mark((function t(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.linkToIntance.pageNumber=u.page,e.next=3,u.fn();case 3:n=e.sent,t=void 0,t=n.map((function(e){return x(e)})).join(""),y.innerHTML=t;case 5:case"end":return e.stop()}var t}),t)})))}),this.page=n,this.totalPages=a,this.paginationPagesList=document.querySelector(".js-pages-list"),this.paginationArrowPrev=document.querySelector(".js-prev-btn"),this.paginationArrowNext=document.querySelector(".js-next-btn"),this.paginationPagesList.addEventListener("click",e(s)(this,T)),this.paginationArrowPrev.addEventListener("click",e(s)(this,P)),this.paginationArrowNext.addEventListener("click",e(s)(this,k)),e(g)(this,O,E).call(this,this.page,this.totalPages)};function A(){document.body.scrollTop=0,document.documentElement.scrollTop=0}function E(e,t){var n="",a=e-2,i=e+2;1===e?i+=2:2===e&&(i+=1),e===t?a-=2:e===t-1&&(a-=1),e>1?this.paginationArrowPrev.classList.remove("visually-hidden"):this.paginationArrowPrev.classList.add("visually-hidden"),e>=4&&(n+='<li>\n        <button type="button" class="pagination__item pagination__number except-mobile">\n          1\n        </button>\n      </li>',e>=5&&(n+='<li class="pagination__item pagination__dots except-mobile">...</li>'));for(var r=a;r<=i;r++)r<=0||r>t||(n+=r!==e?'<li>\n        <button type="button" class="pagination__item pagination__number">\n          '.concat(r,"\n        </button>\n      </li>"):'<li>\n        <button type="button" class="pagination__item pagination__number pagination__number_current">\n          '.concat(r,"\n        </button>\n      </li>"));e<=t-3&&(e<=t-4&&(n+='<li class="pagination__item pagination__dots except-mobile">...</li>'),n+='<li>\n        <button type="button" class="pagination__item pagination__number except-mobile">\n          '.concat(t,"\n        </button>\n      </li>")),e===t?this.paginationArrowNext.classList.add("visually-hidden"):this.paginationArrowNext.classList.remove("visually-hidden"),this.paginationPagesList.innerHTML=n}var F=new(0,w.default);e(r)(e(m).mark((function t(){var n=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:"Avatar",e.next=3,F.fetchTrendMovies();case 3:new N(F.pageNumber,F.totalPagesNumber).setFunction(F.fetchTrendMovies,F);case 5:case"end":return e.stop()}}),t)})))()}();
//# sourceMappingURL=library.2aae281c.js.map
