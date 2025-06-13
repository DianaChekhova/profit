import {makeAutoObservable} from 'mobx';

export default class ProfileStore {
  profile = {};
  loading = true;
  service = null;

  constructor(serviceInstance, type) {
    makeAutoObservable(this);
    this.service = serviceInstance;
    this.type = type;
    this.init();
  }

  get Profile() {
    return this.profile;
  }

  get isLoading() {
    return this.loading;
  }

  setProfile = (profile) => {
    this.profile = profile;
  };

  setLoading = (bool) => {
    this.loading = bool;
  };

  fetchProfile = async () => {
    try {
      this.setLoading(true);
      const response = await this.service.getProfile();
      this.setProfile(response?.length > 0 ? response : {});
      this.setLoading(false);
    } catch (error) {
      console.error('Error fetching Profile:', error);
      this.setProfile({});
    } finally {
      this.setLoading(false);
    }
  };

  freezeProfile = async () => {
    try {
      this.setLoading(true);
      await this.service.setFreeze();
      await this.fetchProfile();
    } catch (error) {
      console.error('Error fetching Profile:', error);
      this.setProfile({});
    } finally {
      this.setLoading(false);
    }
  };

  init = async () => {
    await this.fetchProfile();
  };
}
