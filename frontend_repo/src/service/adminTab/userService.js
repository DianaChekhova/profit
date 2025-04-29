import $api from '../index.jsx';

export default class UserService {
  async getItems() {
    const response = await $api.get(`/users`);
    return response.data;
  }
  async removeItem(id) {
    const response = await $api.delete(`/users/${id}`);
    return response.data;
  }
  async updateItem(data) {
    const response = await $api.put(`/admin/user/${data.id}`, data);
    return response.data;
  }
  async addItem(data) {
    const response = await $api.post(`/admin/user`, data);
    return response.data;
  }
}
