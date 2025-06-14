import $api from '../index.jsx';

export default class ProfileService {
  async getItems() {
    const response = await $api.get(`/users/${localStorage.getItem('oid')}`);
    return response.data;
  }

  async updateItem(id, data) {
    const response = await $api.put(`/users/${localStorage.getItem('oid')}`, data);
    return response.data;
  }

  async setFreeze() {
    const response = await $api.get('/freeze');
    return response.data;
  }
}
