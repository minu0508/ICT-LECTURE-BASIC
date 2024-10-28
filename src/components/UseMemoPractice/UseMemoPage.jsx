import { useState } from 'react';
import { ShowSum } from './ShowSum';

/**
 * [useMeo]
 * 연산이 재렌더링 되는 것을 막는 Hook
 */

export const UseMemoPage = () => {
  const [label, setLabel] = useState('Result');
  return (
    <>
      <button onClick={() => setLabel(label + ':')}>Change Label</button>
      <ShowSum label={label} n={1000000000} />
    </>
  );
};
