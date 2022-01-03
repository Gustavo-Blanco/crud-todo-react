import { useState } from "react";

export const useDialog = () => {
  const [open, setOpen] = useState(false);
  const handleOpenDialog = () => setOpen(!open);

  return { open, setOpen, handleOpenDialog };
};
