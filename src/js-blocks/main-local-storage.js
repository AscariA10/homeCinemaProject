// add movies array to localStorage
export function addFilmsToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// get entries from localStorage
export function getLocalStorageEntry(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
}
