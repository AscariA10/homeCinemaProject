import Api from './fetch';

const api = new Api();

async function getGenres() {
  const result = await api.fetchGenres();
  const genres = result.genres.reduce(
    (acc, genre) => ({ ...acc, [genre.id]: genre.name }),
    []
  );
  sessionStorage.setItem('genres', JSON.stringify(genres));
}
getGenres();

export function сhangeIdtoGener(item) {
  const gener = [];
  if (sessionStorage.getItem('genres')) {
    const genres = JSON.parse(sessionStorage.getItem('genres'));

    for (let i = 0; i < item.length; i += 1) {
      for (const key in genres) {
        if (item[i] === Number(key)) {
          gener.push(genres[key]);
        }
      }
    }
  }
  return gener;
}
