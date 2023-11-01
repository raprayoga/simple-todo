<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <input
          v-model="input"
          type="text"
          class="form-control"
          placeholder="Set your goal"
          aria-label="input your goal"
        />
        <button class="btn btn-outline-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoListSore } from '../stores/todo-list'

const store = useTodoListSore()

const input = ref('')

const handleSubmit = () => {
  if (input.value === '') return
  store.addNewItem(input.value)
  input.value = ''
}
</script>

<style scoped></style>
