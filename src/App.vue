<template>
  <div id="app">
    <div class="main-content">
      <router-view />
    </div>
<nav class="navbar flex justify-center items-center text-center divide-x divide-gray-600 w-full">
  <RouterLink
    to="/"
    class="flex flex-col items-center justify-center w-1/3 py-2"
  >
    <i :class="['pi pi-home text-2xl', isActive('/') ? 'text-blue-500' : 'text-gray-500']"></i>
    <span :class="isActive('/') ? 'text-blue-500' : 'text-gray-500'">Home</span>
  </RouterLink>

  <RouterLink
    to="/dashboard"
    class="flex flex-col items-center justify-center w-1/3 py-2"
  >
    <i :class="['pi pi-calendar text-2xl', isActive('/dashboard') ? 'text-blue-500' : 'text-gray-500']"></i>
    <span :class="isActive('/dashboard') ? 'text-blue-500' : 'text-gray-500'">Dashboard</span>
  </RouterLink>

  <RouterLink
    to="/activities"
    class="flex flex-col items-center justify-center w-1/3 py-2"
  >
    <i :class="['pi pi-check text-2xl', isActive('/activities') ? 'text-blue-500' : 'text-gray-500']"></i>
    <span :class="isActive('/activities') ? 'text-blue-500' : 'text-gray-500'">Activities</span>
  </RouterLink>
</nav>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
function isActive(path: string) { return route.path === path }

</script>
