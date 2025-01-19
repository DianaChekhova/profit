import {makeAutoObservable} from 'mobx';
import AuthService from '../service/AuthService.js';

export default class UserStore {
  user = {};
  isAuthenticated = Boolean(localStorage.getItem('token')) || false;

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

  getUser() {
    return this.user;
  }

  async login(login, password) {
    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem('token', response.data.token);
      await this.getMe(localStorage.getItem('token'));
      console.log('hello');
    } catch (error) {
      console.log(error);
    }
  }

  async registration(data) {
    try {
      const response = await AuthService.registration(data);
      localStorage.setItem('token', response.data.token);
      await this.getMe(localStorage.getItem('token'));
    } catch (error) {
      console.log(error);
    }
  }

  async getMe(token) {
    try {
      console.log(token);
      const response = await AuthService.me(token);
      this.setAuthenticated(true);
      this.setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    console.log('kdsdssd');
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuthenticated(false);
      this.setUser({});
    } catch (error) {
      console.log(error);
    }
  }
}
