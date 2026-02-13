import { appState } from "./state";

export function addToDo(text, category) {
  const newToDo = {
    id: Date.now(),
    text,
    completed: false,
    category,
  };

  appState.todos.push(newToDo);
}

export function toggleTheme() {
  appState.theme = appState.theme === "light" ? "dark" : "light";
}

export function setFilterStatus(filter) {
  appState.filterStatus = filter;
}

export function setCategoryStatus(category) {
  appState.filterCategory = category;
}

export function toggleCompleted(todoId) {
  const todo = appState.todos.find((item) => item.id === todoId);

  if (!todo) {
    console.warn(
      `Todo with id of ${todoId} not found in toggleCompleted function in stateMangement.js`,
    );
  }

  todo.completed = !todo.completed;
}

export function deleteTodo(todoId) {
  appState.todos = appState.todos.filter((todo) => todo.id !== todoId);
}
