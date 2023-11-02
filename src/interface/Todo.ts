interface TodoValue {
  name: string
  description: string
}

interface Todo extends TodoValue {
  id: number
  isAccept: boolean
}
