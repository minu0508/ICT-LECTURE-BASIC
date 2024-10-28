import { useHover } from '../../Hooks/useHover';
import { useKeyPress } from '../../Hooks/useKeyPress';
import { useToggle } from '../../Hooks/useToggle';
import { Box } from './Box';
import { Checkbox } from './CheckBox';

export const CustomHookPage = () => {
  const [on, toggle] = useToggle();
  const [ref, isHover] = useHover();
  const keyPressed = useKeyPress('a');

  return (
    <>
      <div>
        <>
          <Checkbox checked={on} onChange={toggle} /> <br />
        </>
        <>
          <button onClick={toggle}>{on ? 'True' : 'False'}</button> <br />
        </>
        <>
          {isHover ? 'hover' : 'mouseout'}
          <Box ref={ref} /> <br />
        </>
        <>{keyPressed && 'Pressed'}</>
      </div>
    </>
  );
};
