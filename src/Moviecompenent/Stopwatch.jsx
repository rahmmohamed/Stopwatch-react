import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const format = (unit) => unit.toString().padStart(2, "0");

  const minutes = format(Math.floor(time / 60000));
  const seconds = format(Math.floor((time % 60000) / 1000));
  const milliseconds = format(Math.floor((time % 1000) / 10));

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{minutes}:{seconds}:{milliseconds}</h1>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => {
        setIsRunning(false);
        setTime(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;