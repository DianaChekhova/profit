import {makeAutoObservable} from 'mobx';

export default class BaseAdminStore {
  items = [];
  loading = true;
  mockItems = [];
  service = null;

  constructor(serviceInstance, mockItems = []) {
    makeAutoObservable(this);
    this.service = serviceInstance;
    this.mockItems = mockItems;
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
      this.setItems(response?.length > 0 ? response : this.mockItems);
      this.setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      this.setItems(this.mockItems); // Fallback to mock data
    } finally {
      this.setLoading(false);
    }
  };

  removeItem = async (itemId) => {
    try {
      await this.service.removeItem(itemId);
      await this.fetchItems();
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  updateItem = async (itemId, itemData) => {
    console.log(itemId, itemData);
    try {
      await this.service.updateItem(itemId, itemData);
      await this.fetchItems();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  addItem = async (itemData) => {
    console.log(itemData);
    console.log(this.service);
    try {
      console.log(this.service);
      await this.service.addItem(itemData);
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
