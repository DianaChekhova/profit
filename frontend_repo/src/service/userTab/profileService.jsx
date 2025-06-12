import $api from '../index.jsx';

export default class ProfileService {
  async getProfile() {
    const response = await $api.get('/profile');
    return response.data;
  }

  async setFreeze() {
    const response = await $api.get('/freeze');
    return response.data;
  }
}
