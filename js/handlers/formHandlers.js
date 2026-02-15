import { appState } from '../state/state.js'
import { addToDo, setCurrentCategory } from '../state/stateManagement.js'

export function handleCategoryClick(event) {
  const categoryBtn = event.target.closest('[data-category]')
  if (!categoryBtn) return

  const category = categoryBtn.dataset.category
  setCurrentCategory(category)
}

export function handleFormSubmit(event) {
  event.preventDefault()

  const input = document.getElementById('todo-input')
  const inputValue = input.value.trim()

  if (!inputValue) return // Exit if empty

  const currentCategory = appState.currentCategory

  addToDo(inputValue, currentCategory)

  input.value = ''
  input.focus()
}
