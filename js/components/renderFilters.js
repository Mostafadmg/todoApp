function getActiveCount(todos) {
  return todos.filter((todo) => !todo.completed).length
}

export function renderCounterContainer(todos) {
  const count = getActiveCount(todos)

  return /*html*/ `
    <div class="todoCounter-container">
      <span class="counter" data-display="item-count">${count} items left</span>
      <button class="clear-btn" data-action="clear-completed">Clear Completed</button>
    </div>
  `
}

export function renderStatusFilters(currentFilter) {
  return /*html*/ `

        <div class="filter-container" role="group" aria-label="Filter by status">
      <button
        class="filter-btn ${currentFilter === 'all' ? 'active' : ''}"
        data-filter="status"
        data-value="all"
        aria-pressed="${currentFilter === 'all' ? 'true' : 'false'}"
      >
        All
      </button>
      <button
        class="filter-btn ${currentFilter === 'active' ? 'active' : ''}"
        data-filter="status"
        data-value="active"
        aria-pressed="${currentFilter === 'active' ? 'true' : 'false'}"
      >
        Active
      </button>
      <button
        class="filter-btn ${currentFilter === 'completed' ? 'active' : ''}"
        data-filter="status"
        data-value="completed"
        aria-pressed="${currentFilter === 'completed' ? 'true' : 'false'}"
      >
        Completed
      </button>
    </div>

    `
}

export function renderCategoryFilters(currentCategory) {
  return /*html*/ `
              <div
      class="filter-container"
      role="group"
      aria-label="Filter by category"
    >
      <button
        class="filter-btn ${currentCategory === 'all' ? 'active' : ''}"
        data-filter="category"
        data-value="all"
        aria-pressed="${currentCategory === 'all' ? 'true' : 'false'}"
      >
        All
      </button>
      <button
        class="filter-btn ${currentCategory === 'work' ? 'active' : ''}"
        data-filter="category"
        data-value="work"
        aria-pressed="${currentCategory === 'work' ? 'true' : 'false'}"
      >
        Work
      </button>
      <button
        class="filter-btn ${currentCategory === 'personal' ? 'active' : ''}"
        data-filter="category"
        data-value="personal"
        aria-pressed="${currentCategory === 'personal' ? 'true' : 'false'}"
      >
        Personal
      </button>
      <button
        class="filter-btn ${currentCategory === 'shopping' ? 'active' : ''}"
        data-filter="category"
        data-value="shopping"
        aria-pressed="${currentCategory === 'shopping' ? 'true' : 'false'}"
      >
        Shopping
      </button>
    </div>
  `
}
