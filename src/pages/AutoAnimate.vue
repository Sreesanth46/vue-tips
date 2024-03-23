<script setup>
import { ref } from 'vue';
import { shuffleArray } from '~/helpers';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const colors = ref(Array.from({ length: 20 }, () => randomColor()));
</script>

<template>
  <button
    class="w-full text-lg bg-slate-200 rounded-sm"
    type="button"
    @click="shuffleArray(colors)">
    Shuffle
  </button>
  <div class="flex flex-wrap w-[500px] mx-auto" v-auto-animate>
    <div
      class="w-[100px] h-[100px] m-[5px] border border-black"
      v-for="(color, i) in colors"
      :key="color"
      @click="colors.splice(i, 1)"
      :style="{ backgroundColor: color }"></div>
  </div>
</template>
