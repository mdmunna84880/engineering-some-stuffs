import { useReducer } from "react";

function reducer(prevState, action){
    if(action.type === 'up') return prevState+action.value;
    if(action.type === 'down') return prevState-action.value;
    if(action.type === 'reset') return action.value;
}

function Counter2() {
    const [count, dispatch] = useReducer(reducer, 0);

    function handleIncrease(){
        dispatch({type: "up", value: 1});
    }

    function handleDecrease(){
        dispatch({type: "down", value: 1});
    }

    function handleReset(){
        dispatch({type: "reset", value: 0});
    }
    
    return ( 
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrease}>+</button>
            &nbsp;&nbsp;&nbsp; <button onClick={handleDecrease}>-</button>
            &nbsp;&nbsp;&nbsp; <button onClick={handleReset}>0</button>
        </div>
     );
}

export default Counter2;