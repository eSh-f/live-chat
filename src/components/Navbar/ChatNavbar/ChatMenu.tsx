import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import LogoutButton from "../LogoutButton";
import SearchInput from "../../Search/SearchInput";

const ChatMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openLogout, setOpenLogout] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setAnchorEl(null);
    setOpenLogout(true);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { mt: 1 },
        }}
      >
        <MenuItem onClose={handleClose} sx={{ color: "orange" }}>
          <ReportGmailerrorredIcon sx={{ marginRight: 1 }} /> Пожаловаться на
          комнату
        </MenuItem>
        <MenuItem onClick={handleOpen} sx={{ color: "red" }}>
          <LogoutIcon sx={{ marginRight: 1 }} />
          Выйти из аккаунта
        </MenuItem>
      </Menu>
      <LogoutButton openModal={openLogout} setOpenModal={setOpenLogout} />
    </div>
  );
};

export default ChatMenu;
