import { useRef } from 'react';
import { Input } from './Input/input';
import { AutoCounter } from './Input/AutoCount';

export const UseRefPage = () => {
  const inputRef = useRef();

  return (
    <>
      <div>
        <Input ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </div>
      <br />
      <AutoCounter />
    </>
  );
};
