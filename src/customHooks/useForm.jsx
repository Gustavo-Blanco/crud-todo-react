import { useState } from "react";
import { initialState } from "../states/todoState";
export const useForm = () => {
  const [values, setValues] = useState(initialState);
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
