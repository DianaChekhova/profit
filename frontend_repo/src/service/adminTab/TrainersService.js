import $api from '../index.jsx';

export default class TrainersService {
  async getItems() {
    return await $api.get(`/users`);
  }
  async removeItem(id) {
    return await $api.delete(`/user`, id);
  }
  async updateItem(data) {
    return await $api.put(`/user`, data);
  }
  async addItem(data) {
    return await $api.post(`/user`, data);
  }
}
