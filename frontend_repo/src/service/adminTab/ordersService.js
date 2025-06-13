import $api from '../index.jsx';

export default class OrderService {
  async getItems() {
    const response = await $api.get(`/users`);
    return response.data;
  }
}
