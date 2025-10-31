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

    <button class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 mr-4 margin-bottom-6">
      Fazer Checkin
    </button>
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
import { rand } from '@vueuse/core';

const streakDays = rand(0, 30);



</script>
