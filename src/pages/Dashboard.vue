<style scoped>
</style>

<template>
  <section class="max-w-3xl mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Seu Painel de Check-ins</h2>
    <p class="text-gray-600 mb-2">Aqui você poderá visualizar seus registros diarios.</p>
    <div class="shadow rounded-lg p-4 mt-4" v-if="noCheckins">
      <p>Ainda não há check-ins cadastrados.</p>
    </div>
    <div v-else>
      <CalendarFixed :highlightDates="dates"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CalendarFixed from '../components/CalendarFixed.vue'

const noCheckins :Boolean = false
const dates = ref<string[]>(['2025-11-29','2025-11-28','2025-11-22'])
console.log(dates.value)
</script>