import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AlertDialog = ({ txtButton, title, content }) => {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => setOpen(!open);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpenClose}>
        {txtButton}
      </Button>
      <Dialog
        open={open}
        onClose={handleOpenClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenClose}>Disagree</Button>
          <Button onClick={handleOpenClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
