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

  async updateItem(id, data) {
    const payload = {...data};
    delete payload.id;
    const response = await $api.put(`/admin/trainer/${id}`, payload);
    return response.data;
  }

  async addItem(data) {
    const payload = {...data};
    delete payload.id;
    const response = await $api.post(`/admin/trainer`, payload);
    return response.data;
  }
}
