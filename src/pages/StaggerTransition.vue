<script setup>
import gsap from 'gsap';
import { computed, ref } from 'vue';
const data = ref([]);
const search = ref('');

const matches = computed(() =>
  data.value.filter(({ name }) =>
    name.toLowerCase().includes(search.value.toLowerCase())
  )
);

fetch('https://pokeapi.co/api/v2/pokemon?limit=10').then(async res => {
  data.value = (await res.json()).results;
});

function onBeforeEnter(el) {
  el.style.opacity = 0;
  el.style.height = 0;
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: '1.6rem',
    delay: el.dataset.index * 0.1,
    onComplete: done
  });
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.1,
    onComplete: done
  });
}
</script>
<template>
  <input type="search" name="Search" id="search" v-model="search" />
  <div v-if="data.length">
    <transition-group
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave">
      <li v-for="({ name }, index) in matches" :key="name" :data-index="index">
        {{ name }}
        <button type="button" @click="data.splice(index, 1)">X</button>
      </li>
    </transition-group>
  </div>
</template>
