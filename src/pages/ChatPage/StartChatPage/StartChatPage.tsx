import React from "react";
import CreateRooms from "../../../components/Rooms/CreateRoom/CreateRooms";
import { Box, Typography } from "@mui/material";

const StartChatPage = () => {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "white",
          borderRadius: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "24px",
          textAlign: "center",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#333", marginBottom: "16px" }}
        >
          {" "}
          Выберете или создайте комнату!{" "}
        </Typography>
        <CreateRooms />
      </Box>
    </>
  );
};

export default StartChatPage;
