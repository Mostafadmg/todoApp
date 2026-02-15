import { appState } from '../state/state.js'

export function renderForm() {
  const selectedCategory = appState.currentCategory
  const baseUrl = import.meta.env.BASE_URL
  const themeIcon =
    appState.theme === 'light'
      ? `${baseUrl}images/icon-moon.svg`
      : `${baseUrl}images/icon-sun.svg`
  
  return /*html*/ `
          <header class="todo-header">
      <h1 class="todo-title">TODO</h1>
      <button class="theme-container" data-action="toggle-theme" aria-label="Toggle theme">
        <img src="${themeIcon}" alt="" class="theme-icon" width="25" height="26" />
      </button>
    </header>
    <form class="todo-create-form" data-form="create-todo">
      <button
        type="button"
        class="circle"
        data-action="toggle-complete"
        aria-label="Mark as complete"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle class="check-base" cx="10" cy="10" r="9.5" fill="var(--bg-todo-item)" stroke="var(--border-color)" />
          <circle opacity="0.01" cx="10" cy="10" r="10" fill="url(#new-todo-check-gradient)" />
          <path
            opacity="0.01"
            d="M6.66663 10.2534L8.91321 12.5L13.9132 7.5"
            stroke="white"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="new-todo-check-gradient"
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
      <input
        type="text"
        required
        id="todo-input"
        name="todo"
        placeholder="Create a new todo..."
        data-input="todo-text"
      />
      <div
        class="category-container category-container--end"
        role="group"
        aria-label="Select category"
      >
        <button
          type="button"
          class="category-item ${selectedCategory === 'personal' ? 'active' : ''}"
          data-category="personal"
          aria-label="Personal category"
          aria-pressed="${selectedCategory === 'personal' ? 'true' : 'false'}"
        >
          <img src="${baseUrl}images/home-1-svgrepo-com.svg" alt="" width="18" height="18" />
        </button>
        <button
          type="button"
          class="category-item ${selectedCategory === 'work' ? 'active' : ''}"
          data-category="work"
          aria-label="Work category"
          aria-pressed="${selectedCategory === 'work' ? 'true' : 'false'}"
        >
          <img src="${baseUrl}images/work-alt-svgrepo-com.svg" alt="" width="18" height="18" />
        </button>
        <button
          type="button"
          class="category-item ${selectedCategory === 'shopping' ? 'active' : ''}"
          data-category="shopping"
          aria-label="Shopping category"
          aria-pressed="${selectedCategory === 'shopping' ? 'true' : 'false'}"
        >
          <img src="${baseUrl}images/shopping-cart-svgrepo-com.svg" alt="" width="18" height="18" />
        </button>
      </div>
    </form>
    
    `
}
