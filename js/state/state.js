import { loadFromStorage } from '../storage/storage.js'

// Default state (used if nothing saved in localStorage)
const defaultState = {
  todos: [
    {
      id: 1,
      text: 'Buy Milk',
      completed: true,
      category: 'shopping',
    },
    {
      id: 2,
      text: 'Buy Eggs',
      completed: false,
      category: 'work',
    },
    {
      id: 3,
      text: 'Buy apple',
      completed: false,
      category: 'personal',
    },
  ],
  theme: 'light',
  filterStatus: 'all',
  filterCategory: 'all',
  currentCategory: 'personal',
}

// Try to load saved state from localStorage
const savedState = loadFromStorage('todoAppState')

// Use saved state if it exists, otherwise use default
export const appState = savedState || defaultState

console.log('📦 App state loaded:', savedState ? 'from localStorage' : 'using defaults')
