import { useState } from "react"


function App() {
  const [time, setTime] = useState(0);

  // const formatTime = ()=>{
  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60);
  //   const millis = Math.floor(time )
  // }
  console.log(time);
const handleTimeSetting = (e)=>{
  console.log(e)
      if(e.key === "Enter"){
        console.log("Enter")
      }
    }
  

  return (
  <div>
    <h1>Real Countdown Application</h1>
    <input type="number" onChange={(e)=>setTime(e.target.value)} placeholder="Enter the countdown in seconds." onKeyDown={handleTimeSetting} onBlur={handleTimeSetting}/>
    <p>00:00:00</p>
    <button>Start</button>
    <button>Stop</button>
    <button>Reset</button>
  </div>
  )
}

export default App
