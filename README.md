# Todo App - Vanilla JavaScript

A professional todo application built with vanilla JavaScript, focusing on clean architecture and state management patterns.

## 🎯 Learning Goals
- Master JavaScript state management
- Understand separation of concerns
- Practice DOM manipulation
- Implement localStorage persistence
- Build professional folder structure

## 📁 Project Structure
```
todo-app-main/
├── index.html          # Main HTML entry point
├── css/
│   └── styles.css      # Application styles
├── js/
│   ├── state.js        # State management (data)
│   ├── ui.js           # UI rendering (display)
│   ├── storage.js      # LocalStorage (persistence)
│   └── app.js          # Main coordinator
└── images/             # Assets (icons, backgrounds)
```

## 🚀 Features
- [ ] Add/Delete/Toggle todos
- [ ] Filter by status (All/Active/Completed)
- [ ] Filter by category (Work/Personal/Shopping)
- [ ] Dark/Light theme toggle
- [ ] LocalStorage persistence
- [ ] Drag & drop reordering

## 🛠️ Development
1. Open `index.html` in a browser
2. Open DevTools Console to see logs
3. Start coding in `js/` files

## 📚 Architecture Pattern
**Separation of Concerns:**
- `state.js` - Single source of truth (data only)
- `ui.js` - DOM manipulation (display only)
- `storage.js` - Persistence (save/load only)
- `app.js` - Coordination (connects everything)

---
Built with ❤️ as a learning project
