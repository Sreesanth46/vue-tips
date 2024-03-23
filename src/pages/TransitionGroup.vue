<script setup>
import { ref } from 'vue';
const data = ref([]);

fetch('https://pokeapi.co/api/v2/pokemon?limit=10').then(async res => {
  data.value = (await res.json()).results;
});
</script>
<template>
  <div v-if="data.length">
    <transition-group tag="ul">
      <li v-for="({ name }, index) in data" :key="name">
        {{ name }}
        <button type="button" @click="data.splice(index, 1)">X</button>
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
.v-move,
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.v-leave-active {
  position: absolute;
}
</style>
