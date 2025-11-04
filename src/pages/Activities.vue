<template>
  <section class="text-center py-16">
    <h1 class="text-4xl font-bold mb-4">Painel de Atividades</h1>
    <p class="text-lg text-gray-600 mb-6">
      Gerencie suas atividades diárias aqui.
    </p>
  <button @click="addActivityModalVisible = true" class="bg-blue-600 text-white px-6 py-3 rounded-lg">
    Adicionar Atividade
  </button>

  <li v-for="act in activities" class="flex justify-between items-center shadow-sm rounded-lg p-3 border m-3 border-gray-600 hover:shadow-md transition"
  >
    <div>
      <p class="font-semibold text-gray-300">{{ act.activity }}</p>
      <p class="text-sm text-gray-500">{{ act.description }}</p>
    </div>

    <button
      @click="excludeActivity(act.id!)"
      class="text-red-500 hover:text-red-600 transition"
    >
      <i class="pi pi-trash text-xl"></i>
    </button>
  </li>
  <Dialog 
    v-model:visible="addActivityModalVisible" 
    modal
    class="rounded-2xl shadow-lg border border-gray-200 w-96"
  >
    <template #container="{closeCallback}">
      <div class="p-6 rounded-lg border border-blue-200 bg-gray-900">
        <h2 class="text-center font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Nova Atividade
        </h2>
        <span class="text-gray-500 dark:text-gray-400 block mb-6">
          Adicione uma nova atividade ao seu check-in.
        </span>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <label for="activity" class="font-semibold text-gray-700 dark:text-gray-300 w-28">
            Atividade
          </label>
          <input
            v-model="activity"
            id="activity"
            type="text"
            class="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
        </div>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
          <label for="description" class="font-semibold text-gray-700 dark:text-gray-300 w-28">
            Descrição
        </label>
          <input
            v-model="description"
            type="text"
            id="description"
            class="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
        </div>
        <div class="flex justify-end gap-3">
          <button 
            type="button" 
            @click="closeCallback()"
            class="!bg-gray-200 !text-gray-700 hover:!bg-gray-300 transition px-6 py-3 rounded-lg"
            >
            Cancelar
          </button>
          <button 
            type="button" 
            @click="addActivity(); closeCallback()"
            class="!bg-blue-500 !text-white hover:!bg-blue-600 transition px-6 py-3 rounded-lg"
            >
            Adicionar
          </button>
        </div>
      </div>
    </template>
    </Dialog>
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import Dialog from 'primevue/dialog';
import ActivityService from '../modules/services/activityService';
import type { Activity } from '../modules/models/Activity';


const activity = ref('');
const description = ref('');
const activities = ref<Activity[]>([]);

const addActivityModalVisible = ref(false);

onBeforeMount(async () => {
  await fetchActivities();
  console.log(activities.value);
})

async function fetchActivities() {
  activities.value = await ActivityService.getAllActivities();
}

async function addActivity() {
  ActivityService.addActivity(activity.value, description.value);
  alert('atividade adicionada com sucesso!');
  await fetchActivities();
}

async function excludeActivity(id: number) {
  ActivityService.removeActivity(id);
  alert('atividade excluída com sucesso!');
  await fetchActivities();
}
</script>
