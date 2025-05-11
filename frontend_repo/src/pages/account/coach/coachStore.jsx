import {makeAutoObservable} from 'mobx';

export default class CoachStore {
  items = [];
  loading = true;
  service = null;

  constructor(serviceInstance, type) {
    makeAutoObservable(this);
    this.service = serviceInstance;
    this.type = type;
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
      console.log(this.type);
      const response = await this.service.getItems(this.type);
      this.setItems(response?.length > 0 ? response : []);
      this.setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      this.setItems([]); // Fallback to mock data
    } finally {
      this.setLoading(false);
    }
  };

  init = async () => {
    if (this.items.length === 0) {
      await this.fetchItems();
    }
  };
}
