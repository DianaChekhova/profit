import $api from './index.jsx';

export default class AuthService {
  static async login(username, password) {
    return await $api.post(`/login`, {username, password});
  }
  static async registration(data) {
    return await $api.post(`/register`, data);
  }
  static async logout() {
    return await $api.post(`/logout`, {});
  }
}
//{
// "email": "string",
// "password": "string",
// "role": "string",
// "username": "string"
// }
