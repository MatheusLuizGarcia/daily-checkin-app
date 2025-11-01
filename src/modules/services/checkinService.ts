import { db } from '../../db/dbConfig';
import type { Checkin } from '../models/Checkin';

export async function getAllCheckins(): Promise<Checkin[]> {
  return await db.checkins.toArray();
}

export async function addCheckin(activity: string) {
  const date = new Date().toISOString().split('T')[0]!;
  await db.checkins.add({ date, activity });
}

export async function addLateCheckin(date : string) {
  await db.checkins.add({ date, activity: 'Checkin tardio' });
}

export async function removeCheckin(id: number) {
  await db.checkins.delete(id);
}

export default {
  getAllCheckins,
  addCheckin,
  removeCheckin,
  addLateCheckin
};
