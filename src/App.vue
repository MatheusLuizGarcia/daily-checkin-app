<template>
  <div id="app">
    <div class="main-content">
      <router-view />
    </div>

    <nav class="navbar">
      <RouterLink to="/">
        <i :class="['pi pi-home text-2xl', isActive('/') ? 'text-blue-500' : 'text-gray-500']"></i>
        <span :class="isActive('/') ? 'text-blue-500' : 'text-grey-500'">Home</span>
      </RouterLink>

      <RouterLink to="/dashboard">
        <i :class="['pi pi-calendar text-2xl', isActive('/dashboard') ? 'text-blue-500' : 'text-gray-500']"></i>
        <span :class="isActive('/dashboard') ? 'text-blue-500' : 'text-grey-500'">Dashboard</span>
      </RouterLink>

      <RouterLink to="/info">
        <i :class="['pi pi-info-circle text-2xl', isActive('/info') ? 'text-blue-500' : 'text-gray-500']"></i>
        <span :class="isActive('/info') ? 'text-blue-500' : 'text-grey-500'">Info</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
function isActive(path: string) { return route.path === path }

</script>
