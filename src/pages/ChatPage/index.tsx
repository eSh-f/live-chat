import React, { FC, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import Messages from "../../components/Messages/Messages";
import Rooms from "../../components/Rooms/Rooms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ChatPage: FC = () => {
  const [selectRoom, setSelectRoom] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        paddingX: { md: "5vw", lg: "10vw" },
      }}
    >
      {(!selectRoom || !isMobile) && (
        <Box
          sx={{
            height: "100%",
            width: { xs: "100%", sm: "25%" },
            borderBottom: { xs: "1px solid #707579", sm: "none" },
            borderRight: { sm: "1px solid #707579" },
          }}
        >
          <Rooms onSelectRoom={(roomId) => setSelectRoom(roomId)} />
        </Box>
      )}

      {(selectRoom || !isMobile) && (
        <Box
          sx={{
            width: { xs: "100%", sm: "75%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {isMobile && selectRoom && (
            <IconButton
              sx={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}
              onClick={() => setSelectRoom(null)}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Messages />
        </Box>
      )}
    </Box>
  );
};

export default ChatPage;
