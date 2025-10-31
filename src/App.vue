<template>
  <div id="app">
    <div class="main-content">
      <router-view />
    </div>

    <nav class="navbar">
      <RouterLink to="/">
        <HomeIcon :class="['size-6', isActive('/') ? 'text-blue-500' : 'text-grey-500']" />
        <span :class="isActive('/') ? 'text-blue-500' : 'text-grey-500'">Home</span>
      </RouterLink>

      <RouterLink to="/dashboard">
        <CalendarDaysIcon :class="['size-6', isActive('/dashboard') ? 'text-blue-500' : 'text-grey-500']" />
        <span :class="isActive('/dashboard') ? 'text-blue-500' : 'text-grey-500'">Dashboard</span>
      </RouterLink>

      <RouterLink to="/info">
        <InformationCircleIcon :class="['size-6', isActive('/info') ? 'text-blue-500' : 'text-grey-500']" />
        <span :class="isActive('/info') ? 'text-blue-500' : 'text-grey-500'">Info</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { HomeIcon, InformationCircleIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
function isActive(path: string) { return route.path === path }

</script>
