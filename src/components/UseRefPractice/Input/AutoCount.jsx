import { useRef, useState } from 'react';

export const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const intervelId = useRef();

  const handleStart = () => {
    intervelId.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervelId.current);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};
