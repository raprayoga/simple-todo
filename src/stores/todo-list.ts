import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getItemFromLocalStorage, setItemToLocalStorage } from '@/utils/store'

export const useTodoListStore = defineStore('todo-list', () => {
  const todos = reactive<Todo[]>(getItemFromLocalStorage('todo') || [])

  const listTodo = computed<Todo[]>(() => todos)

  const listUnchecked = computed<Todo[]>(() => todos.filter((todo) => !todo.isAccept))

  const listChecked = computed<Todo[]>(() => todos.filter((todo) => todo.isAccept))

  function addNewItem({ name, description }: TodoValue): void {
    todos.push({
      id: Math.floor(Math.random() * 1000),
      name,
      description,
      isAccept: false
    })

    setItemToLocalStorage('todo', todos)
  }

  function toggleStatus(item: Todo): void {
    const index: number = todos.findIndex((todo) => todo.id === item.id)

    if (index < 0) return
    todos[index].isAccept = !item.isAccept

    setItemToLocalStorage('todo', todos)
  }

  function deleteItem(id: number): void {
    const index: number = todos.findIndex((todo) => todo.id === id)

    if (index < 0) return
    todos.splice(index, 1)

    setItemToLocalStorage('todo', todos)
  }

  return { listTodo, listUnchecked, listChecked, addNewItem, toggleStatus, deleteItem }
})
