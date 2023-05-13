import FavoriteRestoranIdb from '../../data/fav-restoran-idb';
import {
  createRestoItemTemplate,
} from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoranIdb.getAllRestoran();
    const restosContainer = document.querySelector('#restos');
    restaurants.forEach((restaurant) => {
      restosContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;