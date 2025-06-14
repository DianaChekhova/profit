import {makeAutoObservable} from 'mobx';

export default class BaseAdminStore {
  items = [];
  loading = true;
  service = null;
  coaches = [];

  constructor(serviceInstance, needTraining) {
    makeAutoObservable(this);
    this.service = serviceInstance;
    this.needTraining = needTraining;
    this.init();
  }

  get itemsList() {
    return this.items;
  }

  get coachesList() {
    return this.coaches;
  }

  get isLoading() {
    return this.loading;
  }

  setItems = (items) => {
    this.items = items;
  };

  setCoaches = (items) => {
    this.coaches = items;
  };

  setLoading = (bool) => {
    this.loading = bool;
  };

  fetchItems = async () => {
    try {
      this.setLoading(true);
      const response = await this.service.getItems();

      this.setItems(response?.length > 0 || response?.id ? response : []);

      if (this.needTraining) {
        console.log('Какого хуя');
        const coaches = await this.service.getCoaches();

        this.setCoaches(coaches);
      }
      console.log(this.coaches);
      this.setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      this.setItems([]); // Fallback to mock data
    } finally {
      this.setLoading(false);
    }
  };

  removeItem = async (itemId = 0) => {
    console.log(itemId);
    try {
      await this.service.removeItem(itemId);
      await this.fetchItems();
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  updateItem = async (id, itemData) => {
    console.log(id);
    console.log(itemData);
    try {
      await this.service.updateItem(id, itemData);
      await this.fetchItems();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  addItem = async (id, itemData) => {
    const payload = {...itemData};
    delete payload.id;
    console.log(id, itemData);
    try {
      await this.service.addItem(id, payload);
      await this.fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  init = async () => {
    if (this.items.length === 0) {
      await this.fetchItems();
    }
  };
}
