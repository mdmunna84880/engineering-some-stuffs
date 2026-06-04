import { useEffect, useState, useRef, useCallback } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalId = useRef(null);

  const startTimer = useCallback(() => {
    intervalId.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  }, []);

  const formatTime = (time)=>{
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const centiseconds = Math.floor((time % 1000) / 10);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(centiseconds).padStart(2, '0')}`  
  }

  const pause = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setIsRunning(false);
  }

  const start = ()=>{
    startTimer();
    setIsRunning(true)
  }

  const reset = ()=>{
    clearInterval(intervalId.current);
    intervalId.current = null;
    setTime(0);
    setIsRunning(false);
  }

  useEffect(()=>{
    startTimer();
    return () => clearInterval(intervalId.current);
  }, [startTimer]);

  return ( 
    <>
      <h1>Stop Watch</h1>
      <h3>{formatTime(time)}</h3>
      <button onClick={isRunning ? pause : start}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </>
   );
}

export default App;