import { useState } from "react";
import { initialState } from "../states/todoState";
export const useForm = (todoValue = initialState) => {
  const [values, setValues] = useState(todoValue);
  const [loading, setLoading] = useState(false);
  // console.log('mis values', values);
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
