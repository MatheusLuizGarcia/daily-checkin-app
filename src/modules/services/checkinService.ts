import { db } from '../../db/dbConfig';
import type { Checkin } from '../models/Checkin';
import { validateActivity } from './activityService';

export async function getAllCheckins(): Promise<Checkin[]> {
  return await db.checkins.toArray(); 
}

export async function addCheckin(activityId: number) {
  validateActivity(activityId);
  const date = new Date().toISOString().split('T')[0]!;
  await db.checkins.add({ date, activity: activityId });
}

export async function addLateCheckin(date : string, activityId: number) {
  await db.checkins.add({ date,  activity: activityId });
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
