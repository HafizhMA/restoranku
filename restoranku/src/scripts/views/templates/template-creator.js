import CONFIG from '../../globals/config';

// menampilkan data detail resto pada api get detail di dalam onject restaurant
const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>alamat</h4>
    <p>${restaurant.address}</p>
    <h4>rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Kategori</h4> 
    <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
  </div>
  <div class="resto__overview">
  <div class="menus">
  <h4>Menu yang tersedia</h4>
  </div>
  <div class="makanminum">
  <div class="makan">
    <h5>Makanan</h5>
    <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
    </div>
    <div class="minum">
    <h5>Minuman</h5>
    <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
    </div>
    </div>
    <div class ="mx10px">
    <h4>Rating</h4>
    <p>⭐️ ${restaurant.rating} ⭐️</p>
    </div>
    <div class ="mx10px"> 
    <h4>Ulasan Pelanggan</h4>
    <ul>${restaurant.customerReviews.map((review) => `<li><b>${review.name}</b> (${review.date}): ${review.review}</li>`).join('')}</ul>
    </div>
    <h3>deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
`;

// menampilkan data list resto pada api get list di dalam array restaurants
const createRestoItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${restaurant.name}"
           src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};