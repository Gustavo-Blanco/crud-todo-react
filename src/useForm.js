import { useState } from "react";
import { todoState } from "./states";

export const useForm = () => {
  const [todo, setTodo] = useState(todoState);
  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  return {
    todo,
    setTodo,
    handleInputChange,
  };
};
