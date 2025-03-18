import React, { useState, FC } from "react";
import Modal from "./Modal";
import { Box, Button, BoxProps } from "@mui/material";
import LoginForm from "./forms/LoginForm";
import RegistrForm from "./forms/RegistrForm";

interface ILoginRegisterProps extends BoxProps {}

const LoginRegister: FC<ILoginRegisterProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const openModal = () => {
    setOpen(true);
    setIsRegister(false);
  };

  return (
    <Box {...props}>
      <Button
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.10)",
          borderRadius: "15px",
          bgcolor: "black",
          width: "20%",
        }}
        variant="contained"
        onClick={openModal}
      >
        Войти
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        {isRegister ? (
          <RegistrForm onSwitch={() => setIsRegister(false)} />
        ) : (
          <LoginForm onSwitch={() => setIsRegister(true)} />
        )}
      </Modal>
    </Box>
  );
};

export default LoginRegister;
