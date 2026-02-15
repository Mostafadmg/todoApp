export function renderTodoList(todos) {
  const baseUrl = './'

  return todos
    .map((todo) => {
      const gradientId = `todo-check-gradient-${todo.id}`

      return /*html*/ `

  <li
          class="todo-item ${todo.completed ? 'completed' : ''}"
          data-todo-id="${todo.id}"
          data-category="${todo.category}"
          data-completed="${todo.completed}"
          draggable="true"
        >
          <button
            type="button"
            class="toggle-complete-btn ${todo.completed ? 'completed' : ''}"
            data-action="toggle-complete"
            aria-label="Toggle complete"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <circle class="check-base" cx="10" cy="10" r="9.5" fill="var(--bg-todo-item)" stroke="var(--border-color)" />
              <circle class="check-circle" cx="10" cy="10" r="9.5" fill="url(#${gradientId})" />
              <path
                class="check-mark"
                d="M6.66663 10.2534L8.91321 12.5L13.9132 7.5"
                stroke="white"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="${gradientId}"
                  x1="-10"
                  y1="10"
                  x2="10"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#55DDFF" />
                  <stop offset="1" stop-color="#C058F3" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          <span class="todo-text" data-field="text"> ${todo.text} </span>
          <span class="category ${todo.category}" data-field="category"> ${todo.category} </span>
          <button class="cross-btn" data-action="delete-todo" aria-label="Delete todo">
            <img src="${baseUrl}images/icon-cross.svg" alt="" class="cross-icon" width="12" height="12" />
          </button>
        </li>
  `
    })
    .join('')
}
