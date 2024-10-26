import { useState } from 'react';
import { boardDummyData } from '../../../data/dummy';
import BoardItem from '../BoardIItem';

export const BoardPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>

      {visible && <h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있다.</h1>}

      {visible ? <BoardItem articles={boardDummyData} /> : <p>게시판을 보려면 Toggle 버튼을 클릭해주세요.</p>}
    </div>
  );
};
