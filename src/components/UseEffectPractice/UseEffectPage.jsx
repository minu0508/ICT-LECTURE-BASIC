import { useEffect, useState } from 'react';

export const UseEffectPage = () => {
  const [count, setCount] = useState(0);

  // Component 내에 있는 Count가 변화를 감지하여 작동된다. (이유: 마지막 배열 속에 Count가 있음.)
  useEffect(() => {
    console.log(`Clicked ${count} times`);
  }, [count]);

  // Component가 처음 로드될 때부터 실행된다. (이유: 마지막 배열을 보면 빈 배열임.)
  // 전역적인 이벤트를 사용할 때 쓸 수 있음.
  useEffect(() => {
    console.log('Component Loaded');
    const handleScroll = () => {
      console.log(window.scrollY);
    };

    document.addEventListener('scroll', handleScroll); // 전역적인 이벤트 사용할 시 사용 가능.
    return () => document.removeEventListener('scroll', handleScroll); // return으로 반환한 함수는 Component가 제거될 시 실행.
  }, []);

  return (
    <div>
      <div>You Clicked {count} times.</div>
      <button onClick={() => setCount(count + 1)}>+</button>

      <div style={{ height: 10000 }}></div>
    </div>
  );
};
