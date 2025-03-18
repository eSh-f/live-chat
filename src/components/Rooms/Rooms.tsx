import React, { FC, useState } from "react";
import { Box, List } from "@mui/material";
import RoomsList from "./RoomsList";
import CreateRooms from "./CreateRoom/CreateRooms";
import RoomNavbar from "components/Navbar/RoomNavbar/RoomNavbar";

interface IRoomsProps {
  onSelectRoom: (roomId: string) => void;
}

const Rooms: FC<IRoomsProps> = ({ onSelectRoom }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        sx={{ height: "7%", width: "100%", borderBottom: "1px solid #707579" }}
      >
        <RoomNavbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          bgcolor: "background.paper",
          overflow: "auto",
        }}
      >
        <RoomsList searchTerm={searchTerm} onSelectRoom={onSelectRoom} />
        <CreateRooms />
      </Box>
    </Box>
  );
};

export default Rooms;
