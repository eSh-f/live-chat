import { Box } from "@mui/material";
import React, { FC } from "react";
import ChatMenu from "./ChatMenu";
import ChatExitRoomButtom from "./ChatExitRoomButtom";
import SearchInput from "../../Search/SearchInput";
import SearchButton from "./SearchButton";
import TitleChatNavbar from "./TitleCahtNavbar";

interface IChatNavbarProps {
  searchMessage: string;
  setSearchMessage: (searchMessage: string) => void;
}

const ChatNavbar: FC<IChatNavbarProps> = ({
  searchMessage,
  setSearchMessage,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        padding: "0 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <TitleChatNavbar />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <SearchButton
          searchMessage={searchMessage}
          setSearchMessage={setSearchMessage}
        />
        <ChatExitRoomButtom />
        <ChatMenu />
      </Box>
    </Box>
  );
};

export default ChatNavbar;
