import $api from '../index.jsx';

export default class CoachService {
  async getItems(type) {
    const response = await $api.get(
      type === 'personal' ? `/subscription/personal/schedule` : '/subscription/group/schedule'
    );
    return response.data;
  }
}
