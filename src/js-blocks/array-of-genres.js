import axios from "axios";

export const genresIdsFromAPI = async (id) => {
const { data } = await axios.get(`/genre/movie/list?api_key=${this.API_KEY}&language=en-US`);
return data;
}

export const genres = {
    genres: [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" },
    ]
};

export const getGenres = (genresIdsFromAPI) => {
    let genresString = '';

    genresIdsFromAPI.forEach(genreId => {
        const genre = genres.find(genre => genre.id === genreId);
        genresString += genre.name + ', ';
    });
    return genresString.slice(0, genresString.length - 2);
}