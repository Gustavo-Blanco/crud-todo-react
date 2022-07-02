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
import { deleteTodo } from '../../api/crudTodo';
import { DialogTodo } from '../Dialog';

export const ListTodo = ({ todos, getData }) => {
  const handleDelete = async (id) => {
    await deleteTodo(id);
    await getData();
  }
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
              <TableCell>
                <DialogTodo getData={getData} todo={todo} text="Edit"/>
                <Button onClick={(e) => handleDelete(todo.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
