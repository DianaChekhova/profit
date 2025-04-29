import $api from '../index.jsx';

export default class TrainersService {
  async getItems() {
    const response = await $api.get(`/trainers`);
    return response.data;
  }

  async removeItem(id) {
    const response = await $api.delete(`/trainer`, {
      data: {
        id: id,
      },
    });
    return response.data;
  }

  async updateItem(id) {
    const response = await $api.put(`/trainer`, id);
    return response.data;
  }

  async addItem(data) {
    const response = await $api.post(`/trainer`, data);
    return response.data;
  }
}
