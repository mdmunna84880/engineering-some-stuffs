import { useState, useRef, useCallback, useEffect } from "react"


function App() {
  // Time in terms of seconds
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);
  
  const startCountdown = useCallback(()=>{
    intervalRef.current = setInterval(()=>{
      setTime((prev)=>prev-1);
    }, 1000);
  }, [setTime]);

  const reset = ()=>{
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    setIsRunning(false);
  }

  const start = useCallback(()=>{
    startCountdown();
    setIsRunning(true);
  }, [startCountdown, setIsRunning]);

  const pause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  const formatTime = (time)=>{
    const hours = Math.floor(time / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = Math.floor(time % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  useEffect(()=>{
    const handleEnter = (event)=>{
      if(event.key === "Enter"){
        start();
      }
    }
    document.addEventListener("keydown", handleEnter);

    return ()=>document.removeEventListener("keydown", handleEnter);
  }, [start]);

   return (
    <>
      <h1>Countdown Timer</h1>
      <input type="text" onChange={(e)=>setTime(e.target.value)} value={time}/>
      <h3>{formatTime(time)}</h3>
      <button onClick={isRunning ? pause : start}>{isRunning ? 'pause' : 'start'}</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
