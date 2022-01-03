import React from "react";
import { Box, Container, TextField, Button } from "@mui/material";
import { useForm } from "../customHooks/useForm";
import { useModal } from "../customHooks/useModal";

export const FormTodo = ({handleClose}, ref) => {
  const { onChangeInput } = useForm();
  // const { handleClose } = useModal();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    // <>
      <Box component="form" sx={style}>
        <div>
          <TextField
            id="name"
            label="name"
            variant="standard"
            name="name"
            onChange={onChangeInput}
            margin="dense"
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="description"
            label="description"
            multiline
            name="description"
            variant="standard"
            rows={4}
            fullWidth
          />
        </div>
        <Button variant="contained" sx={{ mt: 5 }}>
          Submit
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 5, ml: 2 }}
          color="error"
          onClick={handleClose}
        >
          Close
        </Button>
      </Box>
    // </>
  );
};
