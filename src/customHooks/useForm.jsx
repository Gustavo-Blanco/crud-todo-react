import { useState } from "react";
export const useForm = (todoValue) => {
  const [values, setValues] = useState(todoValue);
  const [loading, setLoading] = useState(false);
  const onChangeInput = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const changeLoading = (e) => {
    setLoading(!loading);
  }

  return { values, setValues, onChangeInput, loading, changeLoading };
};
