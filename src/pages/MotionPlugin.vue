<script setup>
import { ref } from 'vue';
import { shuffleArray } from '~/helpers';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const colors = ref(Array.from({ length: 20 }, () => randomColor()));
</script>

<template>
  <div class="space-y-4">
    <box class="flex gap-2">
      <a
        href="https://motion.vueuse.org/"
        target="_blank"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >VueUse Motion</a
      >
      <a
        href="https://justintaddei.github.io/v-wave/"
        target="_blank"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >also check v-wave</a
      >
    </box>
    <button
      class="w-full text-lg bg-slate-200 rounded-sm"
      type="button"
      @click="shuffleArray(colors)">
      Shuffle
    </button>
    <div class="flex flex-wrap w-[500px] mx-auto">
      <div
        class="w-full h-[100px] m-[5px] border border-black"
        v-for="(color, i) in colors"
        :key="color"
        @click="colors.splice(i, 1)"
        v-motion-pop-visible
        :style="{ backgroundColor: color }"></div>
    </div>
  </div>
</template>
