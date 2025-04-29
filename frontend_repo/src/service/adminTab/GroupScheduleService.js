import $api from '../index.jsx';

export default class GroupScheduleService {
  async getItems() {
    const response = await $api.get('/subscription/group/schedule');
    return response.data;
  }

  async removeItem(id) {
    const response = await $api.delete(`/subscription/group/schedule`, {
      data: {
        id: id,
      },
    });
    return response.data;
  }

  async updateItem(id, data) {
    const response = await $api.put(`/subscription/group/schedule`, data);
    return response.data;
  }

  async addItem(data) {
    const response = await $api.post('/subscription/group/schedule', data);
    return response.data;
  }
}
