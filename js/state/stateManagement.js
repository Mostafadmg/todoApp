import { appState } from './state.js'
import { saveToStorage } from '../storage/storage.js'


export function addToDo(text, category) {
  const newToDo = {
    id: Date.now(),
    text,
    completed: false,
    category,
  }

  appState.todos.push(newToDo)
  saveToStorage('todoAppState', appState)
}

export function toggleTheme() {
  appState.theme = appState.theme === 'light' ? 'dark' : 'light'
  saveToStorage('todoAppState', appState)
}

export function setFilterStatus(filter) {
  appState.filterStatus = filter
  saveToStorage('todoAppState', appState)
}

export function setCategoryStatus(category) {
  appState.filterCategory = category
  saveToStorage('todoAppState', appState)
}

export function toggleCompleted(todoId) {
  const todo = appState.todos.find((item) => item.id === todoId)

  if (!todo) {
    console.warn(
      `Todo with id of ${todoId} not found in toggleCompleted function in stateMangement.js`,
    )
    return
  }

  todo.completed = !todo.completed
  saveToStorage('todoAppState', appState)
}

export function deleteTodo(todoId) {
  appState.todos = appState.todos.filter((todo) => todo.id !== todoId)
  saveToStorage('todoAppState', appState)
}

// stateManagement.js
export function getFilteredTodos(todos, filterStatus, filterCategory) {
  let filtered = todos

  // Filter by status
  if (filterStatus === 'active') {
    filtered = filtered.filter((todo) => !todo.completed)
  } else if (filterStatus === 'completed') {
    filtered = filtered.filter((todo) => todo.completed)
  }

  // Filter by category

  if (filterCategory !== 'all') {
    filtered = filtered.filter((todo) => todo.category === filterCategory)
  }

  return filtered
}

export function setCurrentCategory(category) {
  appState.currentCategory = category
  saveToStorage('todoAppState', appState)
}

export function clearCompleted() {
  appState.todos = appState.todos.filter((todo) => !todo.completed)
  saveToStorage('todoAppState', appState)
}
export function reorderTodos(draggedId, targetId) {
  // Find the positions in the array
  const draggedIndex = appState.todos.findIndex((todo) => todo.id === draggedId)
  const targetIndex = appState.todos.findIndex((todo) => todo.id === targetId)

  // Safety check
  if (draggedIndex === -1 || targetIndex === -1) return

  // Step 1: Remove the dragged todo from the array
  const [draggedTodo] = appState.todos.splice(draggedIndex, 1)

  // Step 2: Insert it at the target position
  appState.todos.splice(targetIndex, 0, draggedTodo)

  saveToStorage('todoAppState', appState)

  console.log(
    '✅ Reordered!',
    appState.todos.map((t) => t.text),
  )
}
