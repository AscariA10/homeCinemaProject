// do not remove this import
import { cardList } from './card-draw.js';

// To create a pagination you have to create an instance of class Pagination
// and call setFunction method with relevant arguments
export default class Pagination {
  /** First param - current page of pagination
   * Second param - total count of pages
   */
  constructor(page, totalPages) {
    this.page = page;
    this.totalPages = totalPages;

    this.paginationPagesList = document.querySelector('.js-pages-list');
    this.paginationArrowPrev = document.querySelector('.js-prev-btn');
    this.paginationArrowNext = document.querySelector('.js-next-btn');

    this.paginationPagesList.addEventListener('click', this.#onClick);
    this.paginationArrowPrev.addEventListener('click', this.#onPrev);
    this.paginationArrowNext.addEventListener('click', this.#onNext);

    this.#createPagination(this.page, this.totalPages);
  }

  /** First param - link to requested function
   * Second param - link to instance of reauested function
   * Third and further params - args of requested function
   */
  setFunction = async (fn, ...arrOfArgs) => {
    this.fn = fn.bind(...arrOfArgs);
    this.linkToIntance = arrOfArgs[0];
    this.#render();
  };

  #onPrev = event => {
    this.page--;
    this.#render();
    this.#createPagination(this.page, this.totalPages);
    this.#onTop();
  };

  #onNext = event => {
    this.page++;
    this.#render();
    this.#createPagination(this.page, this.totalPages);
    this.#onTop();
  };

  #onClick = event => {
    this.classes = [...event.target.classList];
    if (this.classes.includes('pagination__dots')) return;
    if (this.classes.includes('pagination__list')) return;
    if (this.classes.includes('pagination__number_current')) return;

    this.page = Number(event.target.innerText);
    this.#render();
    this.#createPagination(this.page, this.totalPages);
    this.#onTop();
  };

  #render = async () => {
    this.linkToIntance.pageNumber = this.page;
    const res = await this.fn();
    cardList(res);
  };

  #onTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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

import ApiMovies from './fetch.js';
const api = new ApiMovies();

//comment unneccessary code block
(async function (movieName = 'Avatar') {
  // code for fetching trend movies and creating pagination
  await api.fetchTrendMovies();
  const pagination = new Pagination(api.pageNumber, api.totalPagesNumber);
  pagination.setFunction(api.fetchTrendMovies, api);
  //
  // // code for fetching requested movies and creating pagination
  // await api.searchMovieByName(movieName);
  // api.pageNumber = 1;
  // const pagination = new Pagination(api.pageNumber, api.totalPagesNumber);
  // pagination.setFunction(api.searchMovieByName, api, movieName);
})();
