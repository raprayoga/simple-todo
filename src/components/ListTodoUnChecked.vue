<template>
  <h3>To Do's</h3>

  <div v-if="listUnchecked.length > 0">
    <div
      class="form-check d-flex justify-content-between border-bottom py-2"
      v-for="todo of listUnchecked"
      :key="todo.name"
    >
      <div class="col-9">
        <input
          class="form-check-input"
          type="checkbox"
          :checked="todo.isAccept"
          @click="handleChangeStatus(todo)"
        />
        <div class="accordion-item">
          <button
            class="accordion-button fw-semibold d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${todo.id}`"
            aria-expanded="true"
            :aria-controls="`collapse${todo.id}`"
          >
            {{ todo.name }}
          </button>
          <label class="d-none d-lg-block">
            {{ todo.name }}
          </label>
          <div
            :id="`collapse${todo.id}`"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body text-body-secondary">
              {{ todo.description }}
            </div>
          </div>
        </div>
      </div>

      <div style="height: 30px; width: 30px" div class="btn-group col-2 d-lg-none">
        <div data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-three-dots-vertical"></i>
        </div>
        <ul class="dropdown-menu bg-danger text-light" @click="handleDelete(todo.id)">
          <li class="text-center">Delete</li>
        </ul>
      </div>

      <div style="height: fit-content" class="col-3 gap-1 d-none d-lg-flex">
        <button
          type="button"
          class="btn btn-primary btn-sm col-6"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse${todo.id}`"
          aria-expanded="true"
          :aria-controls="`collapse${todo.id}`"
        >
          Show Desc
        </button>
        <button type="button" class="btn btn-danger btn-sm col-6" @click="handleDelete(todo.id)">
          Delete
        </button>
      </div>
    </div>
  </div>

  <div class="text-center" v-else>
    <span class="text-center text-secondary fs-6">Empty</span>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoListSore } from '@/stores/todo-list'

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
