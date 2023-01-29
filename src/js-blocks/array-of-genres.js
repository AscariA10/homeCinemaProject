import Api from './fetch';

const api = new Api();

async function getGenres() {
   const result = await api.fetchGenres();
   const genres = result.genres.reduce((acc, genre) => ({ ...acc, [genre.id]: genre.name }), []);
   sessionStorage.setItem('genres', JSON.stringify(genres));
}
