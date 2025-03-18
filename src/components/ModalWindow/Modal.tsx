import React, { FC } from "react";
import { Modal as MuiModal, Box } from "@mui/material";

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
  borderRadius: 5,
};

interface IModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<IModalProps> = ({ open, onClose, children }) => {
  return (
    <div>
      <MuiModal open={open} onClose={onClose}>
        <Box sx={style}>{children}</Box>
      </MuiModal>
    </div>
  );
};

export default Modal;
