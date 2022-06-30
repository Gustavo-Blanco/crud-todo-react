import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { store } from "../../api/crudTodo";
import { useDialog } from "../../customHooks/useDialog";
import { FormTodo } from "../FormTodo/index";
import {todoState} from '../../states'
export const DialogTodo = ({getData, todo = {todoState}, text = "Create"}) => {
  // console.log('mi dialogo', todo);
  const { open, handleOpenDialog } = useDialog();

  return (
    <>
      <Button onClick={handleOpenDialog} variant="contained" sx={{ mb: 2 }}>
        {text}
      </Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogTitle id="alert-dialog-title">Create todo</DialogTitle>
        <DialogContent>
          <FormTodo
            handleOpenDialog={handleOpenDialog}
            getData={getData}
            todo={todo}
          />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};
