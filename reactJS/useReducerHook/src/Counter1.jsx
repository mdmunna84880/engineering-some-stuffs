import { useReducer, useState } from "react";

function reducer(prevState, action){
    return prevState+action;
}

function Counter1() {
    const [count, setCount] = useReducer(reducer, 0);
    const [countS, setCountS] = useState(0);

    function handleIncrease(){
        setCount(1);
    }

    function handleIncreaseS(){
        // setCountS(countS+1);
        setCountS(prevCont => prevCont + 1);
        
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

export default Counter1;