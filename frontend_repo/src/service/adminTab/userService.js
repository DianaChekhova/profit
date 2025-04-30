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
  async updateItem(id, data) {
    const response = await $api.put(`/admin/user/${id}`, data);
    return response.data;
  }
  async addItem(data) {
    const payload = {...data};
    delete payload.id;
    const response = await $api.post(`/admin/user`, payload);
    return response.data;
  }
}
