export default class Pagination {
  constructor(page, totalPages) {
    this.page = page;
    this.totalPages = totalPages;

    this.paginationPagesList = document.querySelector('.js-pages-list');
    this.paginationArrowPrev = document.querySelector('.js-prev-btn');
    this.paginationArrowNext = document.querySelector('.js-next-btn');

    this.paginationPagesList.addEventListener('click', this.onClick);
    this.paginationArrowPrev.addEventListener('click', this.onPrev);
    this.paginationArrowNext.addEventListener('click', this.onNext);

    this.createPagination(this.page, this.totalPages);
  }

  onPrev = event => {
    this.page--;
    this.createPagination(this.page, this.totalPages);
  };

  onNext = event => {
    this.page++;
    this.createPagination(this.page, this.totalPages);
  };

  onClick = event => {
    this.classes = [...event.target.classList];
    if (this.classes.includes('pagination__dots')) return;
    if (this.classes.includes('pagination__list')) return;
    if (this.classes.includes('pagination__number_current')) return;

    this.page = Number(event.target.innerText);
    this.createPagination(this.page, this.totalPages);
  };

  createPagination(page, totalPages) {
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
        <button type="button" class="pagination__item pagination__number">
          1
        </button>
      </li>`;

      if (page >= 5) {
        markup += `<li class="pagination__item pagination__dots">...</li>`;
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
        markup += `<li class="pagination__item pagination__dots">...</li>`;
      }

      markup += `<li>
        <button type="button" class="pagination__item pagination__number">
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
