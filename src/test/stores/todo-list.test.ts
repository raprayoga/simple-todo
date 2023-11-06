import { setActivePinia, createPinia } from 'pinia'
import { useTodoListStore } from '@/stores/todo-list'

const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string): string => store[key] ?? null,
    setItem: (key: string, value: string): void => {
      store[key] = value.toString()
    },
    removeItem: (key: string): void => {
      delete store[key]
    },
    clear: (): void => {
      store = {}
    },
    key: (): string | null => '',
    length: Object.keys(store).length
  }
})()

let originalLocalStorage: Storage

const itemSample: TodoValue = {
  name: 'item 1',
  description: 'item description'
}

describe('Todo List Store Test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('initial state sould containt empty array', () => {
    const todoStore = useTodoListStore()
    expect(todoStore.listTodo).toHaveLength(0)
  })

  test('add new item', () => {
    const todoStore = useTodoListStore()
    todoStore.addNewItem(itemSample)
    expect(todoStore.listTodo).toMatchObject([
      {
        ...itemSample,
        isAccept: false
      }
    ])
  })

  test('change status to checked', () => {
    const todoStore = useTodoListStore()
    todoStore.toggleStatus(todoStore.listUnchecked[0])
    expect(todoStore.listChecked).toHaveLength(1)
  })

  test('delete item', () => {
    const todoStore = useTodoListStore()
    const idLatesItem = todoStore.listChecked[0].id
    todoStore.deleteItem(idLatesItem)
    expect(todoStore.listTodo).toHaveLength(0)
  })
})

describe('Localstorage Todo List Test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    originalLocalStorage = window.localStorage
    ;(window as any).localStorage = localStorageMock

    localStorage.setItem(
      'todo',
      JSON.stringify([
        {
          ...itemSample,
          id: 1,
          isAccept: false
        }
      ])
    )
  })
  afterAll((): void => {
    ;(window as any).localStorage = originalLocalStorage
  })

  test('initial state sould containt from localstorage', () => {
    const todoStore = useTodoListStore()
    localStorage.getItem('todo')

    expect(todoStore.listTodo).toMatchObject([
      {
        ...itemSample,
        id: 1,
        isAccept: false
      }
    ])
  })
})
