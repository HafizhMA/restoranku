import TheRestoDbSource from '../../data/therestorandb-source';
import {
  createRestoItemTemplate,
} from '../templates/template-creator';

const home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Pick Your Restaurants</h2>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.homeResto();
    const restosContainer = document.querySelector('#restos');
    restaurants.forEach((restaurant) => {
      restosContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default home;