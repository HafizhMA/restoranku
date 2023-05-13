/* eslint-disable no-trailing-spaces */
import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async homeResto() {
    const response = await fetch(API_ENDPOINT.DATA_RESTO);
    const responseJson = await response.json();
    // get data array restaurants 
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    // get data object restaurant
    return responseJson.restaurant;
  }
}

export default TheRestoDbSource;