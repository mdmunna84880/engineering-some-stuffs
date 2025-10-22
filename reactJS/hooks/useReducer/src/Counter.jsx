import { useReducer, useState } from "react";

function reducer(prevState, action){
    return action;
}

function Counter() {
    const [count, setCount] = useReducer(reducer, 0);
    const [countS, setCountS] = useState(0);

    function handleIncrease(){
        // setCount(count+1);
        setCount(prevCont => prevCont + 1);
        //It can not be handled because it is passing functions as argument and argument can't be handled by useReducer.
    }

    function handleIncreaseS(){
        // setCountS(countS+1);
        setCountS(prevCont => prevCont + 1);
        // Functions can be handled as it has special function for distinct whether the argument is function or variable
        // Based on it, it can handled the function under the hood.
        
    }
    return ( 
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrease}>+</button>
            <h2>CountS: {countS}</h2>
            <button onClick={handleIncreaseS}>+</button>
        </div>
     );
}

export default Counter;