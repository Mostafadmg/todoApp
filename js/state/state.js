import { loadFromStorage, saveToStorage } from '../storage/storage.js'

const STORAGE_KEY = 'todoAppState'
const STATE_VERSION = 2
const STATUS_FILTERS = new Set(['all', 'active', 'completed'])
const CATEGORY_FILTERS = new Set(['all', 'work', 'personal', 'shopping'])
const CATEGORIES = new Set(['work', 'personal', 'shopping'])

// Default state (used if nothing saved in localStorage)
const defaultState = {
  version: STATE_VERSION,
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

function sanitizeState(savedState) {
  if (!savedState || savedState.version !== STATE_VERSION) return null

  return {
    ...defaultState,
    ...savedState,
    version: STATE_VERSION,
    todos: Array.isArray(savedState.todos) ? savedState.todos : defaultState.todos,
    theme: savedState.theme === 'dark' ? 'dark' : 'light',
    filterStatus: STATUS_FILTERS.has(savedState.filterStatus) ? savedState.filterStatus : 'all',
    filterCategory: CATEGORY_FILTERS.has(savedState.filterCategory) ? savedState.filterCategory : 'all',
    currentCategory: CATEGORIES.has(savedState.currentCategory) ? savedState.currentCategory : 'personal',
  }
}

// Try to load saved state from localStorage
const savedState = loadFromStorage(STORAGE_KEY)
const hydratedState = sanitizeState(savedState)

// Use saved state if it exists and is valid, otherwise use default
export const appState = hydratedState || { ...defaultState }

// Persist sanitized/default state so future loads are consistent
if (!hydratedState) {
  saveToStorage(STORAGE_KEY, appState)
}

console.log('📦 App state loaded:', savedState ? 'from localStorage' : 'using defaults')
