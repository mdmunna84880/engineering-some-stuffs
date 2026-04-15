# Throttle Progress Bar

A React application that demonstrates the **throttle design pattern** by implementing a scroll progress indicator.

## 🎯 Purpose

This project serves as a practical exercise in:
- Understanding and implementing the **throttle function**
- Managing scroll events efficiently in React
- Building a visual progress bar that tracks page scroll position

## 🚀 Features

- **Throttled scroll handler** - Limits function execution to once per specified interval (1000ms)
- **Real-time progress tracking** - Calculates scroll position as a percentage
- **Visual progress bar** - Displays current scroll progress at the top of the page
- **React 19** - Built with the latest React and Vite for optimal performance

## 📦 Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Vanilla JavaScript** - Custom throttle implementation (no external dependencies)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📖 How It Works

### Throttle Function (`src/throttle.js`)

The throttle function ensures that a given function is executed **at most once** within a specified time interval:

```javascript
export const throttle = (func, delay) => {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func.apply(this, args);
  }
}
```

**Key concepts:**
- **Closure** - Maintains `lastCall` state between invocations
- **Timestamp comparison** - Checks if enough time has elapsed
- **Context preservation** - Uses `.apply()` to maintain `this` binding

### Progress Calculation (`src/App.jsx`)

```javascript
const handleScroll = throttle(() => {
  const scrolled = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  setProgress((scrolled / height) * 100);
}, 1000);
```

**Formula:**
```
Progress % = (scrollY / (scrollHeight - windowHeight)) × 100
```

## 🏗️ Project Structure

```
throttle-progress-bar/
├── src/
│   ├── App.jsx          # Main component with scroll logic
│   ├── throttle.js      # Throttle utility implementation
│   ├── main.jsx         # React entry point
│   └── App.css          # Styles (if applicable)
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🔧 Customization

### Adjust Throttle Delay

Change the delay parameter in `App.jsx` to control execution frequency:

```javascript
// Executes at most once every 500ms
throttle(handleScroll, 500)
```

### Style the Progress Bar

Add CSS to style the progress indicator:

```css
.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: #e0e0e0;
  z-index: 1000;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #45a049);
  transition: width 0.2s ease;
}
```

## 🎓 Learning Outcomes

After completing this exercise, you'll understand:

1. **Throttle vs Debounce** - Throttle guarantees periodic execution; debounce delays until quiet
2. **Performance optimization** - Prevents excessive function calls on high-frequency events
3. **React lifecycle** - Proper event listener setup and cleanup with `useEffect`
4. **State management** - Using `useState` for reactive UI updates

## 📝 Notes

- **Throttle** is ideal for scroll, resize, and mouse move events
- **Debounce** is better for search input, window resize (final value), and form validation
- The current implementation uses a **trailing edge** approach (executes at the start of each interval)

## 🐛 Known Issues & Improvements

- [ ] Add division-by-zero guard when `scrollHeight === innerHeight`
- [ ] Implement leading/trailing edge options in throttle
- [ ] Add TypeScript support
- [ ] Create reusable `useScrollProgress` hook
