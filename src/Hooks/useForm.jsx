import { useState } from 'react';

export const useForm = ({ initialValues, onSubmit, validate }) => {
  // 입력하는 필드의 초기값 상태 의미
  const [values, setValues] = useState(initialValues);
  // submit 하다가 오류 발생할 시 반환할 상태 의미
  const [errors, setErrors] = useState({});
  // submit 하는 동안 로딩 표시 상태 의미
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length === 0) {
      await onSubmit();
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
