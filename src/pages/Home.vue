<style scoped>
</style>

<template>
  <section class="flex flex-col text-center py-16 pb-32">
    <h1 class="text-4xl font-bold mb-4">Bem-vindo ao Checkin Diário</h1>
    <div v-if="streakDays > 0">
    <h1>Você está em uma sequência de {{ streakDays }} Dias 🔥!</h1>
    </div>
    <div v-if ="dailyCheckinCompleted">
      <p class="text-green-500 font-semibold mb-6 p-6">
        Você já fez o check-in de hoje! Volte amanhã para continuar sua sequência.
      </p>
    </div>
    <div v-else>
      <li v-for="act in activities" :key="act.activity" class="flex items-center shadow-sm rounded-lg p-3 border m-3 border-gray-600 hover:shadow-md transition"
      >
        <Checkbox v-model="selectedActivities" :inputId="act.activity" name="atividade" :value="act.id" class="mr-3"/>
        <label class="ml-1" :for="act.activity">{{ act.activity }}</label>
      </li>
      <div
      class="fixed bottom-16 left-0 w-full flex justify-center py-4"
      >
      <button
      class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 mr-4"
      @click="todayCheckin"
      >
      Fazer Checkin
      </button>
      <RouterLink
      to="/dashboard"
      class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
      Ir para o Dashboard
    </RouterLink>
    </div>
  </div>  
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import Checkbox from 'primevue/checkbox';
import CheckinService from '../modules/services/checkinService';
import ActivityService from '../modules/services/activityService';
import type { Checkin } from '../modules/models/Checkin';
import type { Activity } from '../modules/models/Activity';

const streakDays = ref(0);
const activities = ref<Activity[]>([]);
const selectedActivities = ref<number[]>([]);
const dailyCheckinCompleted = ref(false)
const today = new Date().toISOString().split('T')[0]

onBeforeMount(async () => {
  const checkins = await CheckinService.getAllCheckins();
  streakDays.value = calculateCurrentStreak(checkins);
  const todayCheckins = await CheckinService.getCheckinsByDate(today!)
  if (todayCheckins && todayCheckins.length > 0) {
    dailyCheckinCompleted.value = true
  }
  await fetchActivities();
});



async function fetchActivities() {
  activities.value = await ActivityService.getAllActivities();
}

async function todayCheckin() {
  if (dailyCheckinCompleted.value) {
    alert('Você já fez o check-in de hoje!')
    return
  }

  if (selectedActivities.value.length === 0) {
    alert('Selecione ao menos uma atividade para fazer check-in.');
    return;
  }

  await Promise.all(
    selectedActivities.value.map(id => CheckinService.addCheckin(id))
  )

  alert('Check-ins realizados com sucesso!')
  selectedActivities.value = []
  dailyCheckinCompleted.value = true
}

function calculateCurrentStreak(checkins: Checkin[]) : number {
  if (!checkins.length) return 0

  const dates : any[] = checkins
    .map(c => new Date(c.date))
    .sort((a: any, b: any) => a - b)

  const today: Date = new Date()
  const todayString = today.toISOString().split('T')[0]
  const hasTodayCheckin = dates.some(d => d.toISOString().split('T')[0] === todayString)

  let streak = 0
  let currentDate = new Date(today)

  if (!hasTodayCheckin) return 0

  while (true) {
    const dateStr = currentDate.toISOString().split('T')[0]
    const found = dates.some(d => d.toISOString().split('T')[0] === dateStr)

    if (found) {
      streak++
      currentDate.setDate(currentDate.getDate() - 1)
    } else {
      break
    }
  }

  console.log('Streak calculado:', streak);
  return streak
}

</script>
