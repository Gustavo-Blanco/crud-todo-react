import { useState } from 'react';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [todo, setTodo] = useState([]);

  return { todos, setTodos, setTodo, todo };
};
