import CONFIG from './config';

const API_ENDPOINT = {
  // get list restaurant array
  DATA_RESTO: `${CONFIG.BASE_URL}/list`,
  // get detail restaurant
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;