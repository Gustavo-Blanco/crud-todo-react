import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { useEffect, useState } from "react";
import { all, deleteTodo, getById, store, updateTodo } from "./api";
import { style } from "./helper";
import { todoState } from "./states";
import { useForm } from "./useForm";

export const Crud = () => {
  const { handleInputChange, todo, setTodo } = useForm();
  const [todos, setTodos] = useState([]); // array todos
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false); 

  console.log("generar crud componente");

  useEffect(() => {
    all().then((todos) => {
        console.log(todos);
        setTodos(todos)
    });
    console.log("se hace fetch");
  }, [update]);

  const handleOpen = () => {
      setTodo(todoState);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todo.id) {
        const todoUp = await updateTodo(todo.id, todo);
        // setTodo({});
        console.log(todoUp, 'mi todo');

    }else{
        await store(todo);
    }
    setUpdate(value => !value);
  };

  const handleEdit = async (id) => {
    const todo = await getById(id);
    setOpen(true);
    console.log('este es mi tood', todo);
    setTodo(todo);
  }

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setUpdate(value => !value);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Description</TableCell>
              <TableCell align='right'>State</TableCell>
              <TableCell align='right'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TableRow
                key={todo.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {todo.id}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {todo.name}
                </TableCell>
                <TableCell align='right'>{todo.description}</TableCell>
                <TableCell align='right'>{todo.state.toString()}</TableCell>
                <TableCell align='right'>
                    <Button onClick={(e) => handleEdit(todo.id)}>Edit</Button>
                    <Button onClick={(e) => handleDelete(todo.id)}>Delete</Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleOpen}>Create</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div>
            <TextField
              id='outlined-basic'
              label='Outlined'
              variant='outlined'
              name='name'
              onChange={handleInputChange}
              value={todo.name}
            />
            <TextareaAutosize name='description' onChange={handleInputChange}
              value={todo.description}
              />
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              <Button type="submit" onClick={handleSubmit}>Submit</Button>
              <Button onClick={handleClose}>Close</Button>
            </Typography>
          </div>
        </Box>
      </Modal>
    </>
  );
};
