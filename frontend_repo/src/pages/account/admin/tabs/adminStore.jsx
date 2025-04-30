import {makeAutoObservable} from 'mobx';

export default class BaseAdminStore {
  items = [];
  loading = true;
  service = null;

  constructor(serviceInstance) {
    makeAutoObservable(this);
    this.service = serviceInstance;
    this.init();
  }

  get itemsList() {
    return this.items;
  }

  get isLoading() {
    return this.loading;
  }

  setItems = (items) => {
    this.items = items;
  };

  setLoading = (bool) => {
    this.loading = bool;
  };

  fetchItems = async () => {
    try {
      this.setLoading(true);
      const response = await this.service.getItems();
      this.setItems(response?.length > 0 ? response : []);
      this.setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      this.setItems([]); // Fallback to mock data
    } finally {
      this.setLoading(false);
    }
  };

  removeItem = async (itemId = 0) => {
    try {
      await this.service.removeItem(itemId);
      await this.fetchItems();
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  updateItem = async (itemData) => {
    try {
      await this.service.updateItem(itemData);
      await this.fetchItems();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  addItem = async (id, itemData) => {
    const payload = {...itemData};
    delete payload.id;
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
