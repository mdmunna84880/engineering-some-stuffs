import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function Counter() {
    const [ count, setCount ] = useState(0);
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    const reset = ()=>{
        setCount(0);
    }

    const increment = ()=>{
        setCount(count+1);
    }

    const decrement = ()=>{
        setCount(count-1);
    }

    return ( <div>
        <h1>Counter</h1>
        <button onClick={toggleTheme}>Change Theme to {theme === "black" ? "white" : "black"}</button>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>

    </div> );
}

export default Counter;