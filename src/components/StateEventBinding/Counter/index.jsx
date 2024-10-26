import { useState } from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ onChange, onIncrease, onDecrease }) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
    if (onIncrease) onIncrease(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
    if (onDecrease) onDecrease(count - 1);
  };

  return (
    <>
      <div
        style={{
          fontSize: '40px',
        }}
      >
        <span>{count}</span>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleDecrease}>-</button>
        </div>
      </div>
    </>
  );
};

Counter.propTypes = {
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};
