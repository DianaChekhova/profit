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

  getUserName() {
    return this.user.entity_name || 'Test User';
  }

  async login(login, password) {
    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem('token', response.data.token);
      await this.getMe(localStorage.getItem('token'));
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message);
      throw error;
    }
  }

  async registration(data) {
    try {
      const response = await AuthService.registration(data);
      localStorage.setItem('token', response.data.token);
      await this.getMe(localStorage.getItem('token'));
    } catch (error) {
      console.error('Registration error:', error.response?.data?.message || error.message);
      throw error;
    }
  }

  async getMe(token) {
    console.log(12);
    try {
      const response = await AuthService.me(token);
      this.setAuthenticated(true);
      this.setUser(response.data);
    } catch (error) {
      console.error('Get me error:', error.response?.data?.message || error.message);
      this.setAuthenticated(false);
      this.setUser({});
      localStorage.removeItem('token');
      throw error;
    }
  }

  async logout() {
    try {
      localStorage.removeItem('token');
      this.setAuthenticated(false);
      this.setUser({});
    } catch (error) {
      console.error('Logout error:', error.response?.data?.message || error.message);
      throw error;
    }
  }
}
