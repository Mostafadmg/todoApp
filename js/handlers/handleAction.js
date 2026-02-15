import { toggleCompleted, deleteTodo, clearCompleted, toggleTheme } from '../state/stateManagement.js'

export function handleTodoAction(event) {
  const actionBtn = event.target.closest('[data-action]')
  if (!actionBtn) return

  const action = actionBtn.dataset.action

  // For delete and toggle, we need the todo ID
  if (action === 'delete-todo' || action === 'toggle-complete') {
    const todoItem = actionBtn.closest('[data-todo-id]')
    if (!todoItem) return

    const todoId = Number(todoItem.dataset.todoId)

    if (action === 'delete-todo') {
      deleteTodo(todoId)
    } else if (action === 'toggle-complete') {
      toggleCompleted(todoId)
    }
  }

  // For clear-completed, no todo ID needed
  if (action === 'clear-completed') {
    clearCompleted()
  }

  // For toggle-theme, no todo ID needed
  if (action === 'toggle-theme') {
    toggleTheme() // You'll add this for the theme feature
  }
}
