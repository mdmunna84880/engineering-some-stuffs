# Debounce Search

A React + Vite web application that demonstrates **debounce functionality** for optimizing search inputs. The app fetches products from the Fake Store API and filters them in real-time with a 500ms debounce delay to prevent excessive re-renders and API calls.

## ✨ Features

- 🛍️ Fetches products from [Fake Store API](https://fakestoreapi.com/)
- 🔍 Debounced search filtering (500ms delay)
- 📱 Responsive grid layout with Tailwind CSS 4
- ⚡ Fast HMR with Vite 8
- 🎯 Optimized with `useMemo` for efficient filtering
- 🎨 Clean UI with hover effects and responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:

```bash
cd debounce-sarching
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📖 How It Works

1. **Data Fetching**: Products are fetched from the Fake Store API on component mount using `useEffect`
2. **Debounced Search**: When you type in the search input, the debounce function waits 500ms after the last keystroke before updating the search term
3. **Filtering**: Products are filtered by title or price using `useMemo` for optimized performance
4. **Display**: Results are displayed in a responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 8** - Build tool and dev server
- **Axios** - HTTP client for API requests
- **Tailwind CSS 4** - Utility-first CSS framework

## 📂 Project Structure

```
debounce-sarching/
├── src/
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main application component with search logic
│   ├── App.css              # App-specific styles
│   ├── debounce.js          # Custom debounce utility function
│   ├── index.css            # Global styles & Tailwind imports
│   └── main.jsx             # React entry point
├── public/                  # Static public assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## 💡 Key Implementations

### Debounce Utility

```javascript
export const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        if(timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
};
```

### Search Logic in App.jsx

```javascript
// Debounced search handler
const desbouncedSetSearchTerm = useMemo(
  () => debounce(setSearchTerm, 500),
  [setSearchTerm]
);

// Optimized product filtering with useMemo
const filterProduct = useMemo(
  () => results.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.price === Number(searchTerm)
  ),
  [results, searchTerm]
);
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 Learning Outcomes

- Understanding debounce pattern and its practical applications
- Implementing custom utility functions in React
- Using `useMemo` for performance optimization
- Working with external APIs and async data fetching
- Building responsive layouts with Tailwind CSS
```
