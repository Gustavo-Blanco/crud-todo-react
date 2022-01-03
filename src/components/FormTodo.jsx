import { forwardRef } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useForm } from "../customHooks/useForm";

export const FormTodo = forwardRef((props, ref) => {
  const { handleClose } = props;

  const { onChangeInput } = useForm();

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
    <div>
      <Box key="1" component="form" sx={style} ref={ref}>
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
          onClick={() => handleClose()}
        >
          Close
        </Button>
      </Box>
    </div>
  );
});
