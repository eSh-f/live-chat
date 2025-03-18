import { Box, IconButton } from "@mui/material";
import React, { FC } from "react";
import SearchInput from "../../Search/SearchInput";
import ClearIcon from "@mui/icons-material/Clear";

interface ISearchInputRoomsProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchInputRooms: FC<ISearchInputRoomsProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <Box sx={{ display: "flex", width: "50%", height: "65%" }}>
      <SearchInput value={searchTerm} onSearch={setSearchTerm} />
    </Box>
  );
};

export default SearchInputRooms;
