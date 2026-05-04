import { useState, useRef, useCallback } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / (1000 * 60))
    const seconds = Math.floor((ms / 1000) % 60)
    const millisecondsPart = Math.floor((ms % 1000) / 10)
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${millisecondsPart.toString().padStart(2, '0')}`
  }

  const handleReset = () => {
    setTime(0)
    setIsRunning(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const handleStart = useCallback(() => {
    if (isRunning) return
    
    setIsRunning(true)
    const startTime = Date.now() - time
    
    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTime)
    }, 10)
  }, [isRunning, time])

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsRunning(false)
  }

  return (
    <>
      <h1>Stop Watch</h1>
      <p>{formatTime(time)}</p>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
    </>
  )
}

export default App