import Dexie from 'dexie';
import type { Table } from 'dexie';
import type { Checkin } from '../modules/models/Checkin';
import type { Activity } from '../modules/models/Activity';

export class AppDatabase extends Dexie {
  checkins!: Table<Checkin>;
  activities!: Table<Activity>;

  constructor() {
    super('AppDatabase');
    this.version(1).stores({
      checkins: '++id, date, activity',
    });
    this.version(1).stores({
      activities: '++id, acivity, description',
    });
  }
}

export const db = new AppDatabase();
