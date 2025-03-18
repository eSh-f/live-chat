import React, { FC, useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IRoom } from "api/intefaces/interface";
import { useNavigate } from "react-router-dom";
import { useGetOneRoomQuery } from "../../../store/RTK Query/roomApi";
import RoomItemAvatar from "./RoomItemAvatar";

interface IRoomItemProps {
  room: IRoom;
  onSelectRoom: (roomId: string) => void;
}

const RoomItem: FC<IRoomItemProps> = ({ room: { id, name }, onSelectRoom }) => {
  const navigate = useNavigate();
  const { data: roomDetails } = useGetOneRoomQuery(id);

  const handleSelectRoom = () => {
    navigate(`/chat/${id}`);
    onSelectRoom(String(id));
  };

  return (
    <ListItem
      disableGutters
      onClick={handleSelectRoom}
      sx={{
        "&:hover": {
          backgroundColor: "#f1f1f1",
          cursor: "pointer",
        },
      }}
    >
      <RoomItemAvatar name={name} id={id} />
      <ListItemText primary={` ${roomDetails?.name || name}`} />
    </ListItem>
  );
};

export default RoomItem;
