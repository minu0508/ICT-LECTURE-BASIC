import * as S from './Box.style';
import './Box.css';

export const Box = ({ bgColor }) => {
  return (
    <>
      {bgColor ? (
        <div
          className="box"
          style={{
            backgroundColor: bgColor,
          }}
        ></div>
      ) : (
        <S.Box />
      )}
    </>
  );
};
