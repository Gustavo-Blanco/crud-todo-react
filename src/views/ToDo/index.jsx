import { Container } from "@mui/material";
import ListToDo from "../../components/ListToDo";
import StoreToDo from "../../components/StoreToDo";

const data = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
  },
  {
    id: 2,
    text: "Learn Redux",
    completed: false,
  },
];

const FormToDo = () => {
  console.log("FormTodo");

  const fetchStore = () => {};

  const fetchGet = () => {};

  return (
    <Container maxWidth="lg">
      <StoreToDo fetchStore={fetchStore} fetchGet={fetchGet} />
      <ListToDo data={data} />
    </Container>
  );
};

export default FormToDo;
