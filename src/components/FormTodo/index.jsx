import { TextField, Box, Button } from "@mui/material";
import { store } from "../../api/crudTodo";
import { useForm } from "../../customHooks/useForm";

export const FormTodo = ({
  data,
  handleOpenDialog,
  getData,
  isUpdate = false,
}) => {
  const { onChangeInput, values } = useForm();

  const uploadTodo = async () => {
    handleOpenDialog();
    await store(values);
    await getData();
  };

  const { name = data.name, description = data.description } = values;

  return (
    <Box component="form" sx={{ width: 300 }}>
      <div>
        <TextField
          id="name"
          label="name"
          variant="standard"
          name="name"
          onChange={onChangeInput}
          margin="dense"
          fullWidth
          autoComplete="false"
          value={name}
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
          onChange={onChangeInput}
          autoComplete="false"
          value={description}
        />
      </div>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="error"
          onClick={handleOpenDialog}
          sx={{ mr: 2 }}
        >
          Close
        </Button>
        <Button variant="contained" onClick={uploadTodo} autoFocus>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
