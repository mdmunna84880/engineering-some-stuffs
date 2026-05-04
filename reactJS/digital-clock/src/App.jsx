import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  const formateTime = (time)=>{
    return time.toLocaleTimeString();
  }

  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date());
    }, 1000);
  })
  return ( <div>
    <h1>Digital Clock</h1>
    <p>{formateTime(time)}</p>
  </div> );
}

export default App;