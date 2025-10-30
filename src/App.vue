<style scoped>
</style>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white p-4">
      <nav class="flex justify-center gap-6">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/info">Info</RouterLink>
      </nav>
    </header>

    <main class="flex-1 p-6">
      <RouterView />
    </main>

    <footer class="bg-gray-100 text-center p-4 text-sm">
      © {{ new Date().getFullYear() }} - Checkin App
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
