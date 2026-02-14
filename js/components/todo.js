export function renderTodoList(todos) {
  return todos
    .map((todo) => {
      return /* html */ `

  <li class="todo-item" data-todo-id="${todo.id}" data-category="personal" data-completed="${todo.completed}">
    <button
      class="toggle-complete-btn"
      data-action="toggle-complete"
      aria-label="Toggle complete"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle cx="10" cy="10" r="9.5" fill="white" stroke="#C8CBE7" />
        <circle
          opacity="0.01"
          cx="10"
          cy="10"
          r="10"
          fill="url(#paint0_linear_82139_343)"
        />
        <path
          opacity="0.01"
          d="M6.66663 10.2534L8.91321 12.5L13.9132 7.5"
          stroke="white"
          stroke-width="2"
        />
        <defs>
          <linearGradien
            id="paint0_linear_82139_343"
            x1="-10"
            y1="10"
            x2="10"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#55DDFF" />
            <stop offset="1" stop-color="#C058F3" />
          </linearGradien>
        </defs>
      </svg>
    </button>
    <span class="todo-text" data-field="text">
      ${todo.text}
    </span>
    <span class="category ${todo.category}" data-field="category">
     ${todo.category}
    </span>
    <button class="cross-btn" data-action="delete-todo" aria-label="Delete todo">
      <img src="/images/icon-cross.svg" alt="" class="cross-icon" />
    </button>
  </li>;
  `;
    })
    .join("");
}
