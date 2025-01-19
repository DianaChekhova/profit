import $api from './index.jsx';

export default class AdminService {
  static async getUsers() {
    return await $api.get(`/users`);
  }
  static async removeUser(id) {
    return await $api.delete(`/user`, id);
  }
  static async updateUser(data) {
    return await $api.put(`/user`, data);
  }
  static async addUser(data) {
    return await $api.post(`/user`, data);
  }
}
