import React, { FC } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import LogoutButton from "./LogoutButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Navbar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{
        backgroundColor: "black",
        height: 50,
      }}
    >
      <Toolbar
        sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h5" onClick={() => navigate("/")}>
          Life-chat
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
