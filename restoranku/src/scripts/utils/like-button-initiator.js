/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import FavoriteRestoranIdb from '../data/fav-restoran-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer,
    resto,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const {
      id,
    } = this._resto;

    if (await this._isrestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  // semua get restoran put delete berasal dari FavoriteRestoranIdb
  async _isrestoExist(id) {
    const resto = await FavoriteRestoranIdb.getRestoran(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoranIdb.putRestoran(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoranIdb.deleteRestoran(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;