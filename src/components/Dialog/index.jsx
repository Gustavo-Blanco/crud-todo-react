import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { store } from '../../api/crudTodo';
import { useDialog } from "../../customHooks/useDialog";
import { FormTodo } from "../FormTodo/index";

export const DialogTodo = ({getData}) => {
  console.log('mi dialogo');
  const { open, handleOpenDialog } = useDialog();

  return (
    <>
      <Button onClick={handleOpenDialog} variant="contained" sx={{ mb: 2 }}>
        Open
      </Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogTitle id="alert-dialog-title">Create todo</DialogTitle>
        <DialogContent>
          <FormTodo
            handleOpenDialog={handleOpenDialog}
            getData={getData}
          />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};
