import $api from './index.jsx';

export default class AuthService {
  static async login(username, password) {
    return await $api.post(`/login`, {username, password});
  }
  static async registration(username, password) {
    return await $api.post(`/register`, {username, password, role: 'user', email: 'registration@gmail.com'});
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
