const BASE_IMG_URL = "https://image.tmdb.org/t/p/origina";
const DEFAULT_IMG_URL =
  "https://images.prom.ua/211029177_w640_h640_211029177.jpg";

const cardList = (data) => {
  const markup = data
    .map((el) => {
      return cardContainer(el);
    })
    .join("");

  galleryContainer.innerHTML = markup;
};

const cardContainer = ({ title, release_date, poster_path }) => {
  const getImgUrl = (path) => {
    return path ? `BASE_IMG_URL${poster_path}` : DEFAULT_IMG_URL;
  };

  const getReleaseDate = (releaseDate) => {
    return releaseDate
      ? new Date(release_date).getFullYear()
      : "No information";
  };

  const imgUrl = getImgUrl(poster_path);
  const releaseYear = getReleaseDate(release_date);
  return renderCard(title, imgUrl, releaseYear);
};

const renderCard = (title, img, date) => {
  return `<div class="card-item">
        <a href="">
          <img class='card-img' src="${img}" alt="${title}">
        </a>
        <p class="card-title">${title}</p>
        <p class="card-ganres"></p>
        <p class="card-release">${date}</p>
      </div>`;
};
