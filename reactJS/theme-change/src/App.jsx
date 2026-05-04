import Counter from "./Counter";
import { ThemeContext } from "./ThemeContext";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("black");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "black" ? "white" : "black");
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>Current Theme: {theme}</h1>
        <Counter />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
