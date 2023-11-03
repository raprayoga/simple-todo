<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name</label>
      <input
        v-model="input.name"
        id="name"
        type="text"
        class="form-control"
        placeholder="Set your goal"
        aria-label="input your goal"
      />
    </div>
    <div class="mt-3">
      <label for="name">Description</label>
      <textarea
        v-model="input.description"
        id="name"
        type="text"
        class="form-control"
        placeholder="Set description"
        aria-label="input description"
        rows="4"
      />
    </div>
    <button class="btn btn-primary mt-3 w-100" type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useTodoListStore } from '@/stores/todo-list'

const store = useTodoListStore()

const input = reactive<TodoValue>({
  name: '',
  description: ''
})

const handleSubmit = () => {
  if (input.name === '' || input.description === '') return
  store.addNewItem(input)
  input.name = ''
  input.description = ''
}
</script>

<style scoped></style>
