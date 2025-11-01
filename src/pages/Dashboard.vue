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
import type { Checkin } from '../modules/models/Checkin'
import CheckinService from '../modules/services/checkinService'
import CalendarFixed from '../components/CalendarFixed.vue'
import { ref, computed, onBeforeMount } from 'vue'


const checkins = ref<Checkin[]>([])
const dates = ref<string[]>([])
const noCheckins = computed(() => checkins.value.length === 0)


onBeforeMount(async () => {
  checkins.value = await CheckinService.getAllCheckins()
  dates.value.push (... checkins.value.map((checkin : Checkin) => checkin.date))
})


</script>