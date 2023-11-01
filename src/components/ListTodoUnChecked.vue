<template>
  <h3>To Do's</h3>
  <div
    class="form-check d-flex justify-content-between"
    v-for="todo of listUnchecked"
    :key="todo.name"
  >
    <div class="col-10">
      <input
        class="form-check-input"
        type="checkbox"
        :checked="todo.isAccept"
        @click="handleChangeStatus(todo)"
      />
      <label class="form-check-label" for="flexCheckDefault">{{ todo.name }}</label>
    </div>

    <div style="height: 30px; width: 30px" div class="btn-group col-2">
      <div data-bs-toggle="dropdown" aria-expanded="false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </div>
      <ul class="dropdown-menu bg-danger text-light" @click="handleDelete(todo.id)">
        <li class="text-center">Delete</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoListSore } from '../stores/todo-list'

const todoListStore = useTodoListSore()
const { listUnchecked } = storeToRefs(todoListStore)

const handleChangeStatus = (todo: Todo) => {
  todoListStore.toggleStatus(todo)
}

const handleDelete = (id: number) => {
  todoListStore.deleteItem(id)
}
</script>

<style scoped></style>
