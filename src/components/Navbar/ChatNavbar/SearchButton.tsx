import React, { FC, useState } from "react";
import SearchInput from "../../Search/SearchInput";
import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface ISearchButtonProps {
  searchMessage: string;
  setSearchMessage: (searchMessage: string) => void;
}

const SearchButton: FC<ISearchButtonProps> = ({
  searchMessage,
  setSearchMessage,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClose = () => {
    setSearchMessage("");
    setIsActive(false);
  };

  return (
    <>
      {isActive ? (
        <Box
          sx={{
            display: "flex",
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
            marginLeft: "60px",
          }}
        >
          <SearchInput
            value={searchMessage}
            onSearch={setSearchMessage}
            onClose={handleClose}
          />
        </Box>
      ) : (
        <IconButton onClick={() => setIsActive(!isActive)}>
          <SearchIcon color="disabled" />
        </IconButton>
      )}
    </>
  );
};

export default SearchButton;
