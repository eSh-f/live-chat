import React from "react";
import List from "@mui/material/List";

import { IMessage, IUser } from "../../store/slices/roomOneSlice";
import { useGetOneRoomQuery } from "../../store/RTK Query/roomApi";
import { useParams } from "react-router-dom";
import UserItem from "./UserItem";
import { Box } from "@mui/material";
import messages from "../Messages/Messages";

const UserList = () => {
  const { roomId } = useParams();
  const {
    data: roomDetails,
    isLoading,
    error,
  } = useGetOneRoomQuery(Number(roomId));

  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: "100%",
        maxWidth: 200,
        bgcolor: "background.paper",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <Box>
        {roomDetails?.messages
          .filter(
            (messages: IMessage, index: number, arr: IMessage[]) =>
              index ===
              arr.findIndex((m) => m.user.username === messages.user.username),
          )
          .map((message: IMessage) => (
            <UserItem key={message.user.username} user={message.user} />
          ))}
      </Box>
    </List>
  );
};

export default UserList;
