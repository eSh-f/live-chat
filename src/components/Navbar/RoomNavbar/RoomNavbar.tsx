import { Box } from "@mui/material";
import React, { FC } from "react";
import SearchInput from "../../Search/SearchInput";
import SearchInputRooms from "./SearchInput";

interface IRoomNavbarProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const RoomNavbar: FC<IRoomNavbarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "100%",
        width: "100%",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchInputRooms searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </Box>
  );
};

export default RoomNavbar;
