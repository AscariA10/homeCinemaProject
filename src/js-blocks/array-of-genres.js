import Api from "./fetch";

const api = new Api();

async function getGenres() {
    const genres = await api.fetchGenres();
    console.log('genres: ', genres);
}
getGenres();

// export const getGenres = (genresArray) => {
//     if (!genresArray || genresArray.length < 1) return '';
//     let genresString = '';

//     genresArray.forEach(genreId => {
//         const genre = genresArray.find(genre => genre.id === genreId);
//         genresString += genre.name + ', ';
//     });
//     return genresString.slice(0, genresString.length - 2);
// }