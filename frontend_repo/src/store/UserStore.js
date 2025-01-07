import {makeAutoObservable} from 'mobx';
import AuthService from '../service/AuthService.js';

export default class UserStore {
  user = {};
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthenticated(bool) {
    this.isAuthenticated = bool;
  }

  getAuthenticated() {
    return this.isAuthenticated;
  }

  setUser(user) {
    this.user = user;
  }

  async login(login, password) {
    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem('token', response.data.token);
      this.setAuthenticated(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  async registration(data) {
    try {
      const response = await AuthService.registration(data);
      localStorage.setItem('token', response.data.token);
      console.log('прикол');
      this.setAuthenticated(true);
      console.log(this.getAuthenticated());
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    console.log('kdsdssd');
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuthenticated(false);
      this.setUser({});
    } catch (error) {
      console.log(error);
    }
  }
}
