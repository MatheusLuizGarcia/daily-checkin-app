import { db } from '../../db/dbConfig';
import type { Activity } from '../models/Activity';

export async function getAllActivities(): Promise<Activity[]> {
  return await db.activities.toArray();
}

export async function addActivity(activity: string, description: string) {
  await db.activities.add({ activity, description });
}

export async function removeActivity(id: number) {
  await db.activities.delete(id);
}

export async function editActivity(id: number, activity: string, description: string) {
  await db.activities.update(id, { activity, description });
}

export async function validateActivity(activityid: number) {
  const activity = await db.activities.where('id').equals(activityid).first();
  if (activity == undefined) {
    throw new Error('Atividade nao cadastrada');
  }
}

export default {
  getAllActivities,
  addActivity,
  removeActivity,
  validateActivity,
  editActivity
};
