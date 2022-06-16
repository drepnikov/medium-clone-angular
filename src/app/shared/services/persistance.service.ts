import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage');
    }
  }

  get(key: string): any {
    try {
      const data = localStorage.getItem(key);

      return data && JSON.parse(data);
    } catch (e) {
      console.error('Error getting data from localStorage');

      return null;
    }
  }
}
