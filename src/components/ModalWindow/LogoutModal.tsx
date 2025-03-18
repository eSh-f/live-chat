import { Box, Button, Typography } from "@mui/material";
import React, { FC } from "react";

interface ILogoutModalProps {
  exit: () => void;
  onClose: () => void;
}

const LogoutModal: FC<ILogoutModalProps> = ({ exit, onClose }) => {
  return (
    <Box>
      <Typography sx={{ textAlign: "center" }} variant="h6">
        Вы уверены что хотите выйти?{" "}
      </Typography>

      <Box
        sx={{
          margin: 2,
          marginBottom: -1,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={onClose}
        >
          Нет
        </Button>
        <Button variant="contained" size="medium" color="error" onClick={exit}>
          Да
        </Button>
      </Box>
    </Box>
  );
};

export default LogoutModal;
