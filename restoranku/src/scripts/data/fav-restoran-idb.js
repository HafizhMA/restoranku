/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import {
  openDB,
} from 'idb';
import CONFIG from '../globals/config';

const {
  DATABASE_NAME,
  DATABASE_VERSION,
  OBJECT_STORE_NAME,
} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});

// saya menggunakan starter project movie catalog jadi hanya perlu mengganti variabel movie ke resto atau sesuatu yang relevan 
const FavoriteRestoranIdb = {
  async getRestoran(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestoran() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestoran(resto) {
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },
  async deleteRestoran(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestoranIdb;