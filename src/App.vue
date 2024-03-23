<script setup>
import Header from '~/components/Header.vue';
</script>

<template>
  <main class="h-screen flex flex-col">
    <Header />
    <div class="p-4 flex-auto overflow-auto">
      <router-view></router-view>
    </div>
  </main>
</template>
