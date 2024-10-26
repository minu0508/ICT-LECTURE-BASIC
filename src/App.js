import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/ComponentPractice';
import { BoardPage } from './components/BoardPractice/BoardPage';
import { Counter } from './components/StateEventBinding/Counter';
import { useState } from 'react';
import { UseEffectPage } from './components/UseEffectPractice/UseEffectPage';
import { UseRefPage } from './components/UseRefPractice/UseRefPage';
import { PagenationPage } from './components/PagenationPractice/PagenationPage';
import { ComponentStylingPage } from './components/ComponentStylingPracttice/ComponentStylingPage';

function App() {
  const [totalCount, setTotalCount] = useState(0);
  return (
    <>
      {/* TotalCount: {totalCount} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main totalCount={totalCount} />} />
          <Route path="/board" element={<BoardPage />} />
          <Route
            path="/count"
            element={
              <>
                <Counter
                  onIncrease={(count) => {
                    setTotalCount(totalCount + 1);
                  }}
                  onDecrease={(count) => {
                    setTotalCount(totalCount - 1);
                  }}
                />
                <Counter
                  onIncrease={(count) => {
                    setTotalCount(totalCount + 1);
                  }}
                  onDecrease={(count) => {
                    setTotalCount(totalCount - 1);
                  }}
                />
                <Counter
                  onIncrease={(count) => {
                    setTotalCount(totalCount + 1);
                  }}
                  onDecrease={(count) => {
                    setTotalCount(totalCount - 1);
                  }}
                />
              </>
            }
          />
          <Route path="/useeffect" element={<UseEffectPage />} />
          <Route path="/useRef" element={<UseRefPage />} />
          <Route path="/pagenation" element={<PagenationPage />} />
          <Route path="/componentstyling" element={<ComponentStylingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
