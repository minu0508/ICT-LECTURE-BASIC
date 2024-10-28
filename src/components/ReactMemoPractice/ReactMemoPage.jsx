import { useState } from 'react';
import { Box } from './Box';

export const ReactMemoPage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <Box />
    </>
  );
};
