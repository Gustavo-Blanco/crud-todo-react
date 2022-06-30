import { Container } from "@mui/material";
import { useEffect } from "react";
import { all } from "../../api/crudTodo";
import { DialogTodo } from "../../components/Dialog";
import { ListTodo } from "../../components/ListTodo";
import { useTodos } from "../../customHooks/useTodos";

export const TodoIndex = () => {
  console.log("todo index component");
  const { setTodos, todos } = useTodos();
  const getData = async () => {
    const data = await all();
    setTodos(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1>todo index container</h1>
      <DialogTodo getData={getData} />
      <ListTodo todos={todos} getData={getData} />
    </Container>
  );
};
