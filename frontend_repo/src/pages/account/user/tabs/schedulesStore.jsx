import {makeAutoObservable} from 'mobx';

export default class SchedulesStore {
  schedule = [];
  groupSessions = [];
  loading = true;
  service = null;

  constructor(serviceInstance, type) {
    makeAutoObservable(this);
    this.service = serviceInstance;
    this.type = type;
    this.init();
  }

  get Schedule() {
    return this.schedule;
  }

  get GroupSessions() {
    return this.groupSessions;
  }

  get isLoading() {
    return this.loading;
  }

  setSchedule = (schedule) => {
    this.Schedule = schedule;
  };

  setGroupSessions = (data) => {
    this.groupSessions = data;
  };

  setLoading = (bool) => {
    this.loading = bool;
  };

  fetchSchedule = async () => {
    try {
      this.setLoading(true);
      const response = await this.service.getSchedule();
      this.setSchedule(response?.length > 0 ? response : {});
      this.setLoading(false);
    } catch (error) {
      console.error('Error fetching Profile:', error);
      this.setSchedule([]);
    } finally {
      this.setLoading(false);
    }
  };

  fetchGroupSessions = async () => {
    try {
      const response = await this.service.getGroupSessions();
      this.setGroupSessions(response?.length > 0 ? response : {});
    } catch (error) {
      console.error('Error fetching Profile:', error);
      this.setGroupSessions([]);
    } finally {
      this.setLoading(false);
    }
  };

  init = async () => {
    await this.fetchSchedule();
    await this.fetchGroupSessions();
  };
}
