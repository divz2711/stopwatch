import React, { useEffect, useState } from 'react';


export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prev => prev + 10); // Increment by 10 milliseconds
      }, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    const millisecondsRemainder = Math.floor(milliseconds % 1000);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millisecondsRemainder.toString().padStart(3, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="container">
      <div className="StopWatch">
        <h1>Stopwatch</h1>
        <h1>{formatTime(time)}</h1>
        <div className="btns">
          <button className="start" onClick={handleStart}>Start</button>
          <button className="stop" onClick={handleStop}>Stop</button>
          <button className="reset" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
