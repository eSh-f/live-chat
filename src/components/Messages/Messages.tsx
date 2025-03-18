import React, { FC, ReactNode, useState } from "react";
import { Box, Typography } from "@mui/material";
import InputMessage from "./InputMessage";
import MessagesList from "./MessagesList";
import ChatNavbar from "../Navbar/ChatNavbar/ChatNavbar";

const Messages: FC = () => {
  const [searchMessage, setSearchMessage] = useState("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        sx={{
          height: "6%",
          width: "100%",
          borderBottom: "1px solid #707579",
          borderRight: "1px solid #707579",
        }}
      >
        <ChatNavbar
          searchMessage={searchMessage}
          setSearchMessage={setSearchMessage}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: "url('/Desktop.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          bgcolor: "white",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: 1, overflow: "hidden" }}>
          <MessagesList searchMessage={searchMessage} />
        </Box>
        <Box
          sx={{
            padding: 2,
            width: "90%",
            margin: "0 auto",
          }}
        >
          <InputMessage />
        </Box>
      </Box>
    </Box>
  );
};

export default Messages;
