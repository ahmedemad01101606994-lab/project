import React, { useState, useRef, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);          
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null);           

  function startTimer() {
    if (running) return; 

    setRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }
  function pauseTimer() {
    clearInterval(intervalRef.current);
    setRunning(false);
  }
  function resetTimer() {
    clearInterval(intervalRef.current);
    setTime(0);
    setRunning(false);
  }

  useEffect(() => {
    return () => {
      console.log("Component unmounted — interval cleared");
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Timer: {time} seconds</h1>

      <button onClick={startTimer} disabled={running}>
        Start
      </button>

      <button onClick={pauseTimer} disabled={!running}>
        Pause
      </button>

      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default Timer;

