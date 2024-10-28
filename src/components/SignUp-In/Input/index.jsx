import * as S from './Input.style';

export const Input = ({ type, name, onChange, placeholder }) => {
  return (
    <>
      <S.InputBox>
        <input type={type} name={name} placeholder={placeholder} onChange={onChange} />
      </S.InputBox>
    </>
  );
};
