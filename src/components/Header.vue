<script setup>
import {routes} from "~/router/index.js";
</script>

<template>
  <header class="py-4">
    <nav>
      <ul class="flex gap-2 mx-4">
        <li>
          <router-link
              v-for="{name} in routes"
              :to="{ name: name }"
              :key="name"
              class="text-blue-500 hover:text-blue-800 p-2"
          >
            {{ name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>