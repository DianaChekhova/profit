import {makeAutoObservable, runInAction} from 'mobx';
import AdminService from '../../../../../service/AdminService.js';
const mockItems = [
  {
    id: 1,
    status: 'активен',
    birth: '24.11.2024',
    phone: '+79966175980',
    email: 'lalala@mail.ru',
    name: 'EXAMPLE',
    passport: '1234 858490',
    address: 'г. Рязань, улица Леймов д2 проспект 4',
  },
];
export default class ClientsStore {
  users = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users) {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }

  setLoading(bool) {
    this.loading = bool;
  }

  getLoading() {
    return this.loading;
  }

  async fetchUsers() {
    try {
      const response = await AdminService.getUsers();
      runInAction(() => {
        if (response.data.users.length > 0) {
          this.setUsers(response.data.user);
        } else {
          this.setUsers(mockItems);
        }
        this.setLoading(false);
      });
    } catch (error) {
      runInAction(() => {
        this.setUsers(mockItems);
        this.setLoading(false);
      });
      console.log(error);
    }
  }

  async removeUser(userId) {
    try {
      await AdminService.removeUser(userId).then(() => this.fetchUsers());
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(userId, user) {
    try {
      await AdminService.updateUser(userId, user).then(() => this.fetchUsers());
    } catch (error) {
      console.log(error);
    }
  }

  async addUser(user) {
    try {
      await AdminService.addUser(user).then(() => this.fetchUsers());
    } catch (error) {
      console.log(error);
    }
  }
}
