import Dexie from 'dexie';
import type { Table } from 'dexie';
import type { Checkin } from '../modules/models/Checkin';

export class AppDatabase extends Dexie {
  checkins!: Table<Checkin>;

  constructor() {
    super('AppDatabase');
    this.version(1).stores({
      checkins: '++id, date, activity',
    });
  }
}

export const db = new AppDatabase();
