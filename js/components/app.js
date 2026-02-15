import { renderBackground } from './background.js'
import { renderForm } from './form.js'
import { renderStatusFilters, renderCategoryFilters, renderCounterContainer } from './renderFilters.js'
import { renderTodoList } from './todo.js'
import { appState } from '../state/state.js'
import { getFilteredTodos } from '../state/stateManagement.js'

export function renderApp(state) {
  // Apply theme to document
  document.documentElement.setAttribute('data-theme', state.theme)
  
  const appContainer = document.getElementById('app')
  const filteredTodos = getFilteredTodos(state.todos, state.filterStatus, state.filterCategory)

  appContainer.innerHTML = /*html*/ `
    ${renderBackground()}
    <section class="todo-section">
      <div class="wrapper">
        ${renderForm()}
        <ul class="todo-container" data-list="todos" role="list">
          ${renderTodoList(filteredTodos)}
        </ul>
      </div>
      ${renderCounterContainer(state.todos)} ${renderStatusFilters(state.filterStatus)}
      ${renderCategoryFilters(state.filterCategory)}
    </section>
  `
}
