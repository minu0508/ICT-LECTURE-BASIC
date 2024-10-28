/**
 * [useMemo]
 *  함수가 재 렌더링된는 것을 막기위한 Hook
 */

import { useCallback, useState } from 'react';
import { Checkbox } from './Checkbox';

export const UseCallbackPage = () => {
  const [foodOn, setFoodOn] = useState(false);
  const [clotehsOn, setClothesOn] = useState(false);
  const [shelterOn, setShelterOn] = useState(false);

  const foodChange = useCallback((e) => setFoodOn(e.target.cheeckd), []);
  const clothesChange = useCallback((e) => setClothesOn(e.target.cheeckd), []);
  const shelterChange = useCallback((e) => setShelterOn(e.target.cheeckd), []);

  return (
    <>
      <div>
        <Checkbox label="Food" on={foodOn} onChange={foodChange} />
        <Checkbox label="Clothes" on={clotehsOn} onChange={clothesChange} />
        <Checkbox label="Food" on={shelterOn} onChange={shelterChange} />
      </div>
    </>
  );
};
