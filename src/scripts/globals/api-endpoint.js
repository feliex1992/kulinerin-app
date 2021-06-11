import CONFIG from './config';

const API_ENDPOINT = {
  GET_LIST_RESTAURANT: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
