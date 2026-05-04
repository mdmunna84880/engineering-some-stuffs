import { useRef, useState } from "react"


function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);

  function start(){
    setIsRunning(true);
    intervalId.current = setInterval(()=>{
      setTime((time)=>time + 10);
    }, 10);
  }

  function stop(){
    clearInterval(intervalId.current);
    setIsRunning(false);
  }

  function reset(){
    clearInterval(intervalId.current);
    setIsRunning(false);
    setTime(0);
  }

  const formatTime = ()=>{
    const minutes = Math.floor(time / (60 * 1000));
    const seconds = Math.floor(((time % (60 * 1000))/1000));
    const milliseconds = Math.floor((time % 1000)/10);
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ':' + milliseconds.toString().padStart(2, '0');
  }
  return (
    <section>
      <h1>Stop Watch</h1>
      <p>{formatTime()}</p>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={stop} disabled={!isRunning}>Stop</button>
      <button onClick={reset}>Reset</button>
    </section>
  )
}

export default App
