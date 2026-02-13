// storage.js - LocalStorage Management (ES6 Module)
// This file is the MEMORY of the app
// EXPORTS: Functions to save/load from localStorage

console.log('✅ storage.js loaded');

// Save data to localStorage
export function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
}

// Load data from localStorage
export function loadFromStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return null;
  }
}
