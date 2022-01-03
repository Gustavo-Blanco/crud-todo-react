import { Button, Modal } from "@mui/material";
import { useModal } from "../customHooks/useModal";
import { FormTodo } from "./FormTodo";

export const ModalTodo = () => {
  const { open, handleOpen, handleClose } = useModal();
  return (
    <>
      <Button onClick={handleOpen} variant='contained'>Open</Button>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={handleClose}
        children={<FormTodo open={handleClose} />}
      />
    </>
  );
};
