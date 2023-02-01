import Notiflix from 'notiflix';

export class LocalStorageEntry {
  list = [];
  length = 0;
  id = 0;

  constructor(key) {
    this.key = key;
    this.list = this.getLocalStorageEntry(key) ?? [];
  }
  // add new Movie to localStorage
  addMovieToLocalStorage(movie) {
    this.list = [movie, ...this.list];
    Notiflix.Notify.success('movie added successfully');
    this.updateLocalStorageEntry();
  }

  deleteMovieFromLocalStorage({ id }) {
    const newList = this.list.filter(el => el.id !== id);
    if (newList.length !== this.list) {
      this.list = newList;
      this.updateLocalStorageEntry();
      Notiflix.Notify.success('movie removed successfully');
      return;
    }
    Notiflix.Notify.failure("can't find the movie to delete");
  }

  // add movies array to localStorage
  addFilmsToLocalStorage(movie) {
    localStorage.setItem(this.key, JSON.stringify(movie));
  }

  // add page number to localStorage
  addPageNumberToLocalStorage(key, pageNumber) {
    localStorage.setItem(key, JSON.stringify(pageNumber));
  }

  // update entry in localStorage
  updateLocalStorageEntry() {
    localStorage.setItem(this.key, JSON.stringify(this.list));
    this.length = this.list.length;
  }

  // get entries from localStorage
  getLocalStorageEntry() {
    if (localStorage.getItem(this.key)) {
      return JSON.parse(localStorage.getItem(this.key));
    }
  }

  // get number of movies
  get length() {
    return this.length;
  }
}
