import $api from '../index.jsx';

export default class GroupScheduleService {
  async getItems() {
    const response = await $api.get('/subscription/group/schedule');
    return response.data;
  }

  async removeItem(id) {
    console.log(id);
    const response = await $api.delete(`/subscription/group/schedule${id}`);
    return response.data;
  }

  async updateItem(id, data) {
    console.log('12');
    const response = await $api.put(`/subscription/group/schedule${id}`, {
      trainerId: data.trainerId,
      name: data.name,
      description: data.description,
      startTime: data.startTime,
      endTime: data.endTime,
      maxClients: data.maxClients,
    });
    return response.data;
  }

  async addItem(data) {
    const response = await $api.post('/subscription/group/schedule', {
      trainerId: data.trainerId,
      name: data.name,
      description: data.description,
      startTime: data.startTime,
      endTime: data.endTime,
      maxClients: data.maxClients,
    });
    return response.data;
  }
} 