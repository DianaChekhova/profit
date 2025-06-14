import $api from '../index.jsx';

export default class OrderService {
  async getItems() {
    const response = await $api.get(`/suggestion`);
    return response.data;
  }
  async removeItem(id) {
    const response = await $api.delete(`/suggestion/${id}`);
    return response.data;
  }
}
