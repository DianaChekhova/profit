import $api from '../index.jsx';

export default class TrainersService {
  async getItems() {
    const response = await $api.get(`/admin/trainers`);
    return response.data;
  }

  async removeItem(id) {
    const response = await $api.delete(`/admin/trainer/${id}`);
    return response.data;
  }

  async updateItem(data) {
    const response = await $api.put(`/admin/trainer/${data.id}`, data);
    return response.data;
  }

  async addItem(data) {
    const response = await $api.post(`/admin/trainer`, data);
    return response.data;
  }
}
