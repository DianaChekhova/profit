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

  setUser(user) {
    this.user = user;
  }

  async login(login, password) {
    console.log('jjj');
    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuthenticated(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  async registration(login, password) {
    try {
      const response = await AuthService.registration(login, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuthenticated(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
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
