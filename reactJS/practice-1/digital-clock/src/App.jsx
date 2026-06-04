/** @format */

import { useEffect, useState } from "react";

function App() {
  const now = new Date();
  const [is12, setIs12] = useState(true);
  const [time, setTime] = useState(
    now.toLocaleTimeString("en-IN", { hour12: is12 }),
  );

  const handleClick = () => {
    setIs12(!is12);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-IN", { hour12: is12 }));
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <h1>digital-clock</h1>
      <button onClick={handleClick}>Make to {is12 ? "24" : "12"}</button>
      <p>{time}</p>
    </div>
  );
}

export default App;
