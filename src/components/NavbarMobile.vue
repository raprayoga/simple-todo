<template>
  <div
    style="height: 50px"
    class="container-fluid fixed-bottom bg-primary d-flex justify-content-center align-items-center"
  >
    <div class="col-4 text-center">
      <router-link to="/">
        <i
          class="bi bi-pencil-square"
          :class="[route.name === 'Home' ? 'text-info' : 'text-light']"
        ></i>
      </router-link>
    </div>
    <div class="col-4 text-center">
      <router-link to="/todos">
        <i
          class="bi bi-list-task"
          :class="[route.name === 'Todos' ? 'text-info' : 'text-light']"
        ></i>
      </router-link>
    </div>
    <div class="col-4 text-center">
      <router-link to="/done">
        <i
          class="bi bi-clipboard2-check"
          :class="[route.name === 'Done' ? 'text-info' : 'text-light']"
        ></i>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped></style>
