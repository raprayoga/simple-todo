m
<template>
  <div style="height: 100vh" class="bg-primary py-3 px-3">
    <h4 class="text-light">Menu</h4>
    <ul class="list-group ms-3">
      <router-link to="/">
        <li
          class="list-unstyled my-2"
          :class="[route.name === 'Home' ? 'text-info' : 'text-light']"
        >
          Home
        </li>
      </router-link>
      <router-link to="/todos">
        <li
          class="list-unstyled my-1"
          :class="[route.name === 'Todos' ? 'text-info' : 'text-light']"
        >
          To Do's
        </li>
      </router-link>
      <router-link to="/done">
        <li
          class="list-unstyled my-1"
          :class="[route.name === 'Done' ? 'text-info' : 'text-light']"
        >
          Done
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped></style>
