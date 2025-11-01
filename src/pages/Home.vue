<style scoped>
</style>

<template>
  <section class="text-center py-16">
    <h1 class="text-4xl font-bold mb-4">Bem-vindo ao Checkin Diário</h1>
    <div v-if="streakDays > 0">
    <h1>Você está em uma sequência de {{ streakDays }} Dias 🔥!</h1>
    </div>
    <p class="text-lg text-gray-600 mb-6">
      Registre suas atividades e acompanhe seu progresso diário.
    </p>
    <button class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 mr-4 margin-bottom-6" @click="todayCheckin">
      Fazer Checkin
    </button>
    <form class="inline-block" @submit.prevent="lateCheckin">
      <input
        type="date"
        class="border border-gray-300 rounded-lg px-4 py-2 mr-2"
        name="lateCheckinDate"
        id="lateCheckinDate"
        v-model="lateCheckinDate"
      />
      <button
        type="submit"
        class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Fazer Checkin Tardio
      </button>
    </form>
    <br />
    <br />
    <br />
    <RouterLink
      to="/dashboard"
      class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      Ir para o Dashboard
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CheckinService from '../modules/services/checkinService';
const streakDays = 1;
const lateCheckinDate = ref('');

function todayCheckin() {
  CheckinService.addCheckin('Checkin diário');
  alert('Checkin realizado com sucesso!');
}

function lateCheckin() {
  console.log(lateCheckinDate.value);
  
  CheckinService.addLateCheckin(lateCheckinDate.value);


  alert('Checkin atrasado realizado com sucesso!');
}
</script>
