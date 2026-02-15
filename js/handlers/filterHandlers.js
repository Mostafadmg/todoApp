import { setFilterStatus, setCategoryStatus } from '../state/stateManagement.js'
import { renderApp } from '../components/app.js'
import { appState } from '../state/state.js'

export function handleFilterClick(event) {
  const filterBtn = event.target.closest('.filter-btn')
  if (!filterBtn) return

  const filterType = filterBtn.dataset.filter // 'status' or 'category'
  const filterValue = filterBtn.dataset.value // 'all', 'active', etc.

  // Update the right filter based on type
  if (filterType === 'status') {
    setFilterStatus(filterValue)
  } else if (filterType === 'category') {
    setCategoryStatus(filterValue)
  }
}
