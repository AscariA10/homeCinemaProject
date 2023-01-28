const paginationPagesList = document.querySelector('.js-pages-list');
const paginationArrowPrev = document.querySelector('.js-prev-btn');
const paginationArrowNext = document.querySelector('.js-next-btn');

let page = 16;
let totalPages = 1000;

paginationPagesList.addEventListener('click', onClick);
paginationArrowPrev.addEventListener('click', onPrev);
paginationArrowNext.addEventListener('click', onNext);

function onPrev(event) {
  page--;
  createPagination(page, totalPages);
}

function onNext(event) {
  page++;
  createPagination(page, totalPages);
}

function onClick(event) {
  const classes = [...event.target.classList];
  if (classes.includes('pagination__dots')) return;
  if (classes.includes('pagination__list')) return;
}

function createPagination(page, totalPages) {
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
    paginationArrowPrev.classList.remove('visually-hidden');
  } else {
    paginationArrowPrev.classList.add('visually-hidden');
  }

  if (page > 3) {
    markup += `<li>
        <button type="button" class="pagination__item pagination__number">
          1
        </button>
      </li>`;

    if (page > 4) {
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

  if (page < totalPages - 2) {
    if (page < totalPages - 3) {
      markup += `<li class="pagination__item pagination__dots">...</li>`;
    }

    markup += `<li>
        <button type="button" class="pagination__item pagination__number">
          ${totalPages}
        </button>
      </li>`;
  }

  if (page === totalPages) {
    paginationArrowNext.classList.add('visually-hidden');
  } else {
    paginationArrowNext.classList.remove('visually-hidden');
  }

  paginationPagesList.innerHTML = markup;
}

createPagination(page, totalPages);
