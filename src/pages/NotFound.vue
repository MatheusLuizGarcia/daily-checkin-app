<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 class="text-6xl font-bold text-blue-600 mb-4">404</h1>
    <h2 class="text-2xl font-semibold mb-2">Página não encontrada</h2>
    <p class="text-gray-600 mb-6">
      O endereço que você tentou acessar não existe ou foi movido.
    </p>
    <RouterLink
      to="/"
      class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      Voltar para Home
    </RouterLink>
  </div>
</template>
