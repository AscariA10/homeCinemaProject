import Notiflix, { Notify } from 'notiflix';

export class LocalStorageEntry {
  list = [];
  length = 0;

  constructor(key) {
    this.key = key;
  }

  // add new Movie to localStorage
  addMovieToLocalStorage(movie) {
    this.list.unshift(movie);
    this.updateLocalStorageEntry();
  }

  // delete the movie from localStorage
  deleteMovieFromLocalStorage(movie) {
    if (this.list.includes(movie)) {
      this.list.splice(this.list.indexOf(movie), 1);
      this.updateLocalStorageEntry();
    } else Notiflix.Notify.failure("can't find the movie to delete");
  }

  // add movies array to localStorage
  addFilmsToLocalStorage(movie) {
    localStorage.setItem(this.key, JSON.stringify(movie));
  }

  // add page number to localStorage
  addPageNumberToLocalStorage(pageNumber) {
    localStorage.setItem(this.key, JSON.stringify(pageNumber));
  }

  // update entry in localStorage
  updateLocalStorageEntry() {
    localStorage.setItem(this.key, JSON.stringify(this.list));
    this.length = this.list.length;
  }

  // get entries from localStorage
  getLocalStorageEntry() {
    if (
      localStorage.getItem(this.key) &&
      localStorage.getItem(this.key) !== 'undefined'
    ) {
      return JSON.parse(localStorage.getItem(this.key));
    }
  }

  // get number of movies
  get length() {
    return this.length;
  }
}
