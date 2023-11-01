<script setup lang="ts">
import InputTodo from './components/InputTodo.vue'
import ListTodoUnChecked from './components/ListTodoUnChecked.vue'
import ListTodoChecked from './components/ListTodoChecked.vue'
import NavbarPrimary from './components/NavbarPrimary.vue'
</script>

<template>
  <NavbarPrimary />

  <main class="container">
    <div class="mb-5">
      <InputTodo />
    </div>

    <div class="d-lg-flex">
      <div class="mt-3 mb-5 col-lg-5">
        <ListTodoUnChecked />
      </div>

      <div class="pb-2 mb-4 border-bottom d-lg-none border-info h-" />
      <div
        style="height: 300px"
        class="pb-2 offset-1 my-3 d-none d-lg-block border-end border-info"
      />

      <div class="my-3 offset-lg-1 col-lg-5">
        <ListTodoChecked />
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
