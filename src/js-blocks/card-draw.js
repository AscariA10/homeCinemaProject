import ApiMovies from './fetch';
import { сhangeIdtoGener } from './array-of-genres';

const galleryContainer = document.querySelector('.gallery-list');
const api = new ApiMovies();

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG_URL = 'https://images.prom.ua/211029177_w640_h640_211029177.jpg';

export const cardList = data => {
   const markup = data
      .map(el => {
         return cardContainer(el);
      })
      .join('');

   galleryContainer.innerHTML = markup;
};

export const cardContainer = ({
   title,
   release_date,
   poster_path,
   vote_average,
   id,
   genre_ids,
}) => {
   const getImgUrl = path => {
      return path ? `${BASE_IMG_URL}${poster_path}` : DEFAULT_IMG_URL;
   };

   const getReleaseDate = releaseDate => {
      return releaseDate ? new Date(release_date).getFullYear() : 'No information';
   };

   const imgUrl = getImgUrl(poster_path);
   const releaseYear = getReleaseDate(release_date);
   const average = vote_average.toFixed(1);

   const genres = сhangeIdtoGener(genre_ids);

   return renderCard(title, imgUrl, releaseYear, average, id, genres);
};

export const renderCard = (title, img, date, average, id, genres) => {
   return `<li class="gallery-card list" data-id=${id}>
    <a class='card-link' href="">    
        <img class='card-img' src="${img}" alt="${title}">
        <p class="card-title">${title}</p>      
        <div class="card-position">
          <p class="card-ganre">${genres.slice(0, 3).join(', ')}</p>
          <p class="card-release">${date}</p>
          <p class="card-average">${average}</p>
        </div>
    </a>
  </li>`;
};

// const render = async () => {
//   const response = await api.fetchTrendMovies();
//   console.log(response);
//   cardList(response);
// };

// render();
