function getActiveCount(todos) {
  return todos.filter((todo) => !todo.completed).length;
}

export function renderCounterContainer(todos) {
  const count = getActiveCount(todos);

  return /* html */ `
    <div class="todoCounter-container">
      <span class="counter" data-display="item-count">${count} items left</span>
      <button class="clear-btn" data-action="clear-completed">Clear Completed</button>
    </div>
  `;
}

export function renderStatusFilters(currentFilter) {
  return /* html */ `

        <div class="filter-container" role="group" aria-label="Filter by status">
          <button
            class="filter-btn ${currentFilter === "all" ? "active" : ""}"
            data-filter="status"
            data-value="all"
            aria-pressed="true"
          >
            All
          </button>
          <button
            class="filter-btn ${currentFilter === "active" ? "active" : ""}"
            data-filter="status"
            data-value="active"
            aria-pressed="false"
          >
            Active
          </button>
          <button
            class="filter-btn ${currentFilter === "completed" ? "active" : ""}""
            data-filter="status"
            data-value="completed"
            aria-pressed="false"
          >
            Completed
          </button>
        </div>

    `;
}

export function renderCategoryFilters(currentCategory) {
  return /* html */ ` {
              <div class="filter-container" role="group" aria-label="Filter by category">
              <button
                class="filter-btn ${currentCategory === "all" ? "active" : ""}"
                data-filter="category"
                data-value="all"
                aria-pressed="true"
              >
                All
              </button>
              <button
                class="filter-btn ${currentCategory === "all" ? "work" : ""}""
                data-filter="category"
                data-value="work"
                aria-pressed="false"
              >
                Work
              </button>
              <button
                class="filter-btn ${currentCategory === "all" ? "personal" : ""}""
                data-filter="category"
                data-value="personal"
                aria-pressed="false"
              >
                Personal
              </button>
              <button
                class="filter-btn ${currentCategory === "all" ? "shopping" : ""}""
                data-filter="category"
                data-value="shopping"
                aria-pressed="false"
              >
                Shopping
              </button>
            </div>;
      }`;
}
