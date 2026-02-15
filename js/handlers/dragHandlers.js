let draggedElement = null
let draggedId = null

function getTodoItem(event) {
  return event.target.closest('.todo-item')
}

function clearDragOverState() {
  document.querySelectorAll('.todo-item.drag-over').forEach((item) => {
    item.classList.remove('drag-over')
  })
}

export function handleDragStart(event) {
  // Find the todo item being dragged
  draggedElement = getTodoItem(event)

  // If we didn't find a todo item, stop
  if (!draggedElement) return

  // Get the todo's ID from the HTML
  draggedId = Number(draggedElement.dataset.todoId)

  // Make it semi-transparent while dragging
  draggedElement.style.opacity = '0.5'

  // Allow dragging across browsers
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', String(draggedId))
  }
}

export function handleDragEnd(event) {
  // Find the dragged element
  const dragged = getTodoItem(event) || draggedElement

  // Make it solid again (remove transparency)
  if (dragged) {
    dragged.style.opacity = '1'
  }

  clearDragOverState()
  draggedElement = null
  draggedId = null
}

export function handleDragOver(event) {
  const target = getTodoItem(event)

  // Only allow drop on other todo items
  if (!target || !draggedElement || target === draggedElement) return

  event.preventDefault()

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
  }

  clearDragOverState()
  target.classList.add('drag-over')
}

export function handleDragLeave(event) {
  const target = getTodoItem(event)
  if (!target) return

  // Ignore leaving to a child node
  const nextElement = event.relatedTarget
  if (nextElement && target.contains(nextElement)) return

  target.classList.remove('drag-over')
}

export function handleDrop(event) {
  event.preventDefault()

  const target = getTodoItem(event)
  clearDragOverState()

  if (!target || !draggedElement) return null

  const targetId = Number(target.dataset.todoId)

  if (Number.isNaN(draggedId) || Number.isNaN(targetId) || draggedId === targetId) {
    return null
  }

  draggedElement.style.opacity = '1'

  return {
    draggedId,
    targetId,
  }
}
