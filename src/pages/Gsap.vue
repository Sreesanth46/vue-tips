<script setup>
import {ref} from "vue";
import GsapTransition from "~/components/GsapTransition.vue";

const show = ref(true)
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <button
        type="button"
        @click="show = !show"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      Toggle
    </button>
    <br>
    <GsapTransition>
      <div v-if="show" class="circle"/>
    </GsapTransition>
  </div>
</template>

<style>
.circle {
  @apply w-12 h-12 bg-cyan-400 rounded-full
}
</style>