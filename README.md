# Todo App - Vanilla JavaScript

A professional todo application built with vanilla JavaScript, Vite, and Tailwind CSS, focusing on clean architecture and state management patterns.

## 🚀 Live Demo
[View Live App](https://mostafadmg.github.io/todoApp/)

## 🎯 Features
✅ Add/Delete/Toggle todos  
✅ Filter by status (All/Active/Completed)  
✅ Filter by category (Work/Personal/Shopping)  
✅ Dark/Light theme toggle  
✅ LocalStorage persistence  
✅ Drag & drop reordering  
✅ Responsive design (mobile-first)  

## 📁 Project Structure
```
todo-app-main/
├── index.html              # Entry point
├── vite.config.js          # Vite configuration
├── css/
│   ├── styles.css          # Main stylesheet
│   ├── variable.css        # CSS variables
│   ├── layout.css          # Layout styles
│   └── components/         # Component styles
├── js/
│   ├── main.js             # App initialization
│   ├── state/              # State management
│   │   ├── state.js        # App state
│   │   └── stateManagement.js
│   ├── components/         # UI components
│   │   ├── app.js
│   │   ├── form.js
│   │   ├── todo.js
│   │   └── ...
│   ├── handlers/           # Event handlers
│   │   ├── dragHandlers.js
│   │   ├── filterHandlers.js
│   │   └── ...
│   └── storage/            # LocalStorage
│       └── storage.js
└── images/                 # Assets
```

## 🛠️ Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Mostafadmg/todoApp.git
cd todoApp

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

The production build will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 📚 Architecture Pattern

**Separation of Concerns:**
- **State** (`state/`) - Single source of truth for data
- **Components** (`components/`) - Pure UI rendering functions
- **Handlers** (`handlers/`) - Event handling and user interactions
- **Storage** (`storage/`) - LocalStorage persistence

**Data Flow:**
```
User Action → Handler → State Update → Save to Storage → Re-render UI
```

## 🚀 Deployment

This project uses GitHub Actions for automatic deployment to GitHub Pages.

### Setup GitHub Pages:
1. Go to repository Settings → Pages
2. Source: "GitHub Actions"
3. Push to main branch triggers automatic deployment

The site will be available at: `https://yourusername.github.io/todoApp/`

## 🎓 Learning Goals Achieved
✅ Master JavaScript state management  
✅ Understand separation of concerns  
✅ Practice DOM manipulation  
✅ Implement localStorage persistence  
✅ Build professional folder structure  
✅ Use modern build tools (Vite)  
✅ Implement drag & drop with HTML5 API  

## 🙏 Credits
Design based on Frontend Mentor's Todo App challenge.

---
Built with ❤️ as a learning project
