// import { useState, useEffect } from 'react';
import './App.css'
import TimerComponent from './TimerComponent';

function App() {

  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(count+1);
  // Variations 1
  // ? Runs at every render and re-render
  // useEffect(() => {
  //   alert("I am learning of UseEffect Hook");
  // })

  //  Variations 2
  //Rus at first render
  // useEffect(()=>alert("useEffect in action"), []);

  //  Variations 3
  // Runs on update
  // useEffect(()=> alert("Use effect in action!"), [count]);
  
  //Variations 4
  // useEffect(()=>alert("useEffect in actions"), [count, total]);

  // Variation 5
  // useEffect(()=>{
  //   alert("Use Effect in action");
  //   return ()=>{
  //     alert(`${count} is unmouted`);
  //   }
  // }, [count]);


  // function handleCount(){
  //   setCount(count+1);
  //   setTotal(total+1);
  // }

  // function handleTotal(){
  //   setTotal(total+1);
  // }


  return (
    <div>
      <h1>Learning in Depth about useEffect</h1>
      {/* <p>{count}</p>
      <button onClick={handleCount}>Increase Count</button>
      <hr />
      <p>{total}</p>
      <button onClick={handleTotal}>Increase Total</button> */}
      <TimerComponent/>
    </div>
  )
}

export default App
