import { useMemo } from 'react';

function sum(n) {
  console.log('Start');
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += i;
  }
  console.log('Finished');
  return result;
}

export const ShowSum = ({ label, n }) => {
  // const result = sum(n);
  const result = useMemo(() => sum(n), [n]); // n이 변경 되었을 때만 다시 연산하도록.
  return (
    <>
      <div>
        {label}: {result}
      </div>
    </>
  );
};
