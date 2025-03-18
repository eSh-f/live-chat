import React, { FC } from "react";
import { Box } from "@mui/material";
import RoomsList from "../Rooms/RoomsList";
import { IRoom } from "../../api/intefaces/interface";
import RoomItem from "../Rooms/RoomItem/RoomItem";
import List from "@mui/material/List";
import UserList from "./UserList";

const Users: FC = () => {
  return (
    <Box
      sx={{
        borderRadius: 5,
        marginTop: 20,
        display: "flex",
        width: "20%",
        bgcolor: "gainsboro",
        maxHeight: "60%",
        boxShadow: "5px 5px 25px gray",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        minHeight: "300px",
      }}
    >
      <UserList />
    </Box>
  );
};

export default Users;
