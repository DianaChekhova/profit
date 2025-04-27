import $api from '../index.jsx';

export default class TrainersService {
  async getItems() {
    const response = await $api.get(`/trainers`);
    return response.data;
  }

  async removeItem(id) {
    const response = await $api.delete(`/trainer/${id}`);
    return response.data;
  }

  async updateItem(id, data) {
    const response = await $api.put(`/trainer/${id}`, {
      firstName: data.firstName,
      lastName: data.lastName,
      specialty: data.specialty,
      phone: data.phone,
      status: data.status,
    });
    return response.data;
  }

  async addItem(data) {
    const response = await $api.post(`/trainer`, {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      specialty: data.specialty,
      phone: data.phone,
      role: 'trainer',
    });
    return response.data;
  }
}
