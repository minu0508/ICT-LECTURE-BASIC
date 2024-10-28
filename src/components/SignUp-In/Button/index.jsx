import * as S from './Button.style';

export const Button = ({ type, disabled, handleSubmit }) => {
  return (
    <>
      <S.ButtonBox>
        <button type={type} disabled={disabled} onClick={handleSubmit}>
          Login
        </button>
      </S.ButtonBox>
    </>
  );
};
