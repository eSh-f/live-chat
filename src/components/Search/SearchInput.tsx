import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { FC, ChangeEvent } from "react";
import ClearIcon from "@mui/icons-material/Clear";

interface SearchInputProps {
  value: string;
  onSearch: (value: string) => void;
  onClose?: () => void;
  placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = ({ value, onSearch, onClose }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  const handleClear = () => {
    onSearch("");
    if (onClose) onClose();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        bgcolor: "white",
        border: "1px solid #ccc",
      }}
    >
      <SearchIcon color="disabled" sx={{ marginLeft: 1 }} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск"
        value={value}
        onChange={handleChange}
      />

      <IconButton onClick={handleClear}>
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default SearchInput;
