import $api from '../index.jsx';

export default class UserService {
  async getItems() {
    const response = await $api.get(`/users`);
    return response.data;
  }
  async removeItem(id) {
    console.log(id);
    const response = await $api.delete(`api/user`, {
      data: {
        id: id,
      },
    });
    return response.data;
  }
  async updateItem(data) {
    const response = await $api.put(`/user`, data);
    return response.data;
  }
  async addItem(data) {
    const response = await $api.post(`api/user`, data);
    return response.data;
  }
}
