import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper,
} from "@mui/material";
import { getById } from "../../api/crudTodo";
import { DialogTodo } from "../Dialog";

export const ListTodo = ({ todos }) => {
  const handleEdit = async (id) => {
    const todo = await getById(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        // sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="td">{todo.id}</TableCell>
              <TableCell component="td">{todo.name}</TableCell>
              <TableCell>{todo.description}</TableCell>
              <TableCell>{todo.state.toString()}</TableCell>
              <TableCell>
                <DialogTodo txtButton="Editar" data={todo} />
                <Button onClick={() => handleEdit(todo.id)}>Edit</Button>
                {/* <Button onClick={(e) => handleDelete(todo.id)}>Delete</Button> */}
                <Button>dads</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
