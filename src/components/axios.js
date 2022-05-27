import axios from 'axios';

const ENDPOINT =
  'https://628e194da339dfef87a787c6.mockapi.io/ofer_todo/shop_items';

const shopAPI = {
  async get() {
    return axios.get(ENDPOINT);
  },
  async post(item) {
    return axios.post(ENDPOINT, item);
  },
};

export default shopAPI;
