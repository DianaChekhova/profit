import $api from '../index.jsx';

export default class UserPersonalScheduleService {
  async getItems() {
    const response = await $api.get('/subscription/personal/schedule');
    return response.data;
  }

  async removeItem(id) {
    const response = await $api.delete(`/subscription/personal/schedule/${id}/unregister`);
    return response.data;
  }

  async getCoaches() {
    const response = await $api.get('/admin/trainers');
    return response.data;
  }

  async addItem(trainer_id) {
    const response = await $api.post(`/subscription/personal/schedule/${trainer_id}/register`);
    return response.data;
  }
}
