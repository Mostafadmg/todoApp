import { appState } from './state/state.js'
import { handleFilterClick } from './handlers/filterHandlers.js'
import { handleCategoryClick } from './handlers/formHandlers.js'
import { renderApp } from './components/app.js'
import { handleFormSubmit } from './handlers/formHandlers.js'
import { handleTodoAction } from './handlers/handleAction.js'
import {
  handleDragStart,
  handleDragEnd,
  handleDragOver,
  handleDragLeave,
  handleDrop,
} from './handlers/dragHandlers.js'
import { reorderTodos } from './state/stateManagement.js'
// This function runs every time someone clicks anywhere in #app
function handleAllClicks(event) {
  // Only re-render if a filter or category button was clicked
  const filterBtn = event.target.closest('.filter-btn')
  const categoryBtn = event.target.closest('.category-item[data-category]')
  const actionBtn = event.target.closest('[data-action]')
  if (filterBtn) {
    handleFilterClick(event)
    renderApp(appState)
  } else if (categoryBtn) {
    handleCategoryClick(event)
    renderApp(appState)
  } else if (actionBtn) {
    handleTodoAction(event)
    renderApp(appState)
  }
}

function initApp() {
  renderApp(appState)

  const app = document.getElementById('app')

  app.addEventListener('click', handleAllClicks)
  app.addEventListener('submit', (e) => {
    handleFormSubmit(e)
    renderApp(appState)
  })

  // Add drag event listeners
  app.addEventListener('dragstart', handleDragEvents)
  app.addEventListener('dragend', handleDragEvents)
  app.addEventListener('dragover', handleDragEvents)
  app.addEventListener('dragleave', handleDragEvents)
  app.addEventListener('drop', handleDragEvents)
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp)
function handleDragEvents(event) {
  if (event.type === 'dragstart') {
    handleDragStart(event)
  } else if (event.type === 'dragend') {
    handleDragEnd(event)
  } else if (event.type === 'dragover') {
    handleDragOver(event)
  } else if (event.type === 'dragleave') {
    handleDragLeave(event)
  } else if (event.type === 'drop') {
    const result = handleDrop(event)
    if (result) {
      reorderTodos(result.draggedId, result.targetId)
      renderApp(appState) // Re-render with new order!
    }
  }
}
