// do not remove the code below
import { cardList } from './card-draw.js';
import { LocalStorageEntry } from './localStorageEntry.js';
const localStorageCurrentPage = new LocalStorageEntry('current_page_number');

// To create a pagination you have to create an instance of class Pagination
// and call setFunction method with relevant arguments
//
// Before creating new instance read about clear method below!
export default class Pagination {
  constructor(isPopularFilms) {
    this.paginationPagesList = document.querySelector('.js-pages-list');
    this.paginationArrowPrev = document.querySelector('.js-prev-btn');
    this.paginationArrowNext = document.querySelector('.js-next-btn');

    this.paginationPagesList.addEventListener('click', this.#onClick);
    this.paginationArrowPrev.addEventListener('click', this.#onPrev);
    this.paginationArrowNext.addEventListener('click', this.#onNext);

    this.page = 1;
    this.isPopularFilms = isPopularFilms;

    if (isPopularFilms) {
      this.page = this.#getPageFromLocalStorage();
      // this.#putPageToLocalStorage(1); // Each next query wiil be the 1st page
    }

    window.addEventListener('beforeunload', this.#onSave);
  }

  /** First param - link to requested function
   *
   * Second param - link to instance of requested function
   * (instance has to be with setter named "pageNumber" to set current page
   * and with getter named "totalPagesNumber" to get count of total pages in result)
   *
   * Third and further params - args of requested function
   */
  setFunction = async (fn, ...arrOfArgs) => {
    this.fn = fn.bind(...arrOfArgs);
    this.linkToIntance = arrOfArgs[0];
    this.#render();
  };

  /** This method has to be called before creating new instance of class */
  clear() {
    this.paginationPagesList.removeEventListener('click', this.#onClick);
    this.paginationArrowPrev.removeEventListener('click', this.#onPrev);
    this.paginationArrowNext.removeEventListener('click', this.#onNext);
    window.removeEventListener('beforeunload', this.#onSave);
  }

  #onSave = event => {
    event.preventDefault();
    if (this.isPopularFilms) this.#putPageToLocalStorage(this.page);
  };

  #onPrev = event => {
    this.page--;
    this.#render();
    this.#onTop();
  };

  #onNext = event => {
    this.page++;
    this.#render();
    this.#onTop();
  };

  #onClick = event => {
    this.classes = [...event.target.classList];
    if (this.classes.includes('pagination__dots')) return;
    if (this.classes.includes('pagination__list')) return;
    if (this.classes.includes('pagination__number_current')) return;

    this.page = Number(event.target.innerText);
    this.#render();
    this.#onTop();
  };

  #render = async () => {
    this.#hidePagination();

    this.linkToIntance.pageNumber = this.page;
    this.res = await this.fn();
    this.totalPages = this.linkToIntance.totalPagesNumber;
    cardList(this.res);

    if (this.isPopularFilms) this.#putPageToLocalStorage(this.page);

    this.#createPagination(this.page, this.totalPages);
  };

  #onTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  #getPageFromLocalStorage() {
    return localStorageCurrentPage.getLocalStorageEntry();
  }

  #putPageToLocalStorage(currentPage) {
    localStorageCurrentPage.addPageNumberToLocalStorage(currentPage);
  }

  #hidePagination() {
    this.paginationPagesList.innerHTML = '';
    this.paginationArrowPrev.classList.add('visually-hidden');
    this.paginationArrowNext.classList.add('visually-hidden');
  }

  #createPagination(page, totalPages) {
    let markup = '';

    let beforeCurr = page - 2;
    let afterCurr = page + 2;

    if (page === 1) {
      afterCurr += 2;
    } else if (page === 2) {
      afterCurr += 1;
    }

    if (page === totalPages) {
      beforeCurr -= 2;
    } else if (page === totalPages - 1) {
      beforeCurr -= 1;
    }

    if (page > 1) {
      this.paginationArrowPrev.classList.remove('visually-hidden');
    } else {
      this.paginationArrowPrev.classList.add('visually-hidden');
    }

    if (page >= 4) {
      markup += `<li>
        <button type="button" class="pagination__item pagination__number except-mobile">
          1
        </button>
      </li>`;

      if (page >= 5) {
        markup += `<li class="pagination__item pagination__dots except-mobile">...</li>`;
      }
    }

    for (let pageNumber = beforeCurr; pageNumber <= afterCurr; pageNumber++) {
      if (pageNumber <= 0 || pageNumber > totalPages) continue;

      if (pageNumber === page) {
        markup += `<li>
        <button type="button" class="pagination__item pagination__number pagination__number_current">
          ${pageNumber}
        </button>
      </li>`;
        continue;
      }

      markup += `<li>
        <button type="button" class="pagination__item pagination__number">
          ${pageNumber}
        </button>
      </li>`;
    }

    if (page <= totalPages - 3) {
      if (page <= totalPages - 4) {
        markup += `<li class="pagination__item pagination__dots except-mobile">...</li>`;
      }

      markup += `<li>
        <button type="button" class="pagination__item pagination__number except-mobile">
          ${totalPages}
        </button>
      </li>`;
    }

    if (page === totalPages) {
      this.paginationArrowNext.classList.add('visually-hidden');
    } else {
      this.paginationArrowNext.classList.remove('visually-hidden');
    }

    this.paginationPagesList.innerHTML = markup;
  }
}

// Examples of using class below
import ApiMovies from './fetch.js';
const api = new ApiMovies();

//comment unneccessary code block
(async function (movieName = 'Avatar') {
  // code for fetching trend movies and creating pagination
  let pagination = new Pagination(true);
  pagination.setFunction(api.fetchTrendMovies, api);

  // // code for fetching requested movies and creating pagination
  // let pagination = new Pagination();
  // pagination.setFunction(api.searchMovieByName, api, movieName);

  // setTimeout(async () => {
  //   pagination.clear();
  //   pagination = new Pagination();
  //   pagination.setFunction(api.searchMovieByName, api, movieName);
  // }, 7000);

  // setTimeout(async () => {
  //   pagination.clear();
  //   pagination = new Pagination();
  //   pagination.setFunction(api.searchMovieByName, api, 'Full');
  // }, 14000);
})();
