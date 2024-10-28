import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import * as S from './LoginForm';
import { useForm } from '../../../Hooks/useForm';
import { ErrorText } from '../ErrorText/ErrorText.style';

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
};

export const LoginForm = ({ onSubmit }) => {
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: async () => {
      await sleep();
      console.log('Submit!');
    },
    validate: ({ name, password }) => {
      const newErrors = {};
      if (!name) newErrors.name = '이름을 입력해주세요.';
      if (!password) newErrors.password = '비밀번호를 입력해주세요.';
      return newErrors;
    },
  });

  console.log(values, errors);

  return (
    <S.CardForm>
      <form onSubmit={handleSubmit}>
        <S.Title>Login</S.Title>
        <Input type={'text'} name={'name'} placeholder={'Name'} onChange={handleChange} />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
        <Input type={'password'} name={'password'} placeholder={'Password'} onChange={handleChange} />
        {errors.name && <ErrorText>{errors.password}</ErrorText>}
        <Button type={'button'} disabled={isLoading} handleSubmit={handleSubmit} />
      </form>
    </S.CardForm>
  );
};
