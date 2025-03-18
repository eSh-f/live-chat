import React, { useState, FC } from "react";
import List from "@mui/material/List";
import { IRoom } from "api/intefaces/interface";

import RoomItem from "./RoomItem/RoomItem";
import { useGetAllRoomsQuery } from "../../store/RTK Query/roomApi";
import { CircularProgress } from "@mui/material";

interface IRoomsListProps {
  onSelectRoom: (roomId: string) => void;
  searchTerm: string;
}

const RoomsList: FC<IRoomsListProps> = ({ searchTerm, onSelectRoom }) => {
  const { data: rooms, error, isLoading } = useGetAllRoomsQuery();

  if (isLoading) return <CircularProgress />;
  if (error) return <p>Ошибка!</p>;

  const filteredRooms = (rooms || []).filter((room: IRoom) =>
    room.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      {filteredRooms.length > 0 ? (
        filteredRooms?.map((room: IRoom) => (
          <RoomItem key={room.id} room={room} onSelectRoom={onSelectRoom} />
        ))
      ) : (
        <p> Комнаты не найдены </p>
      )}
    </>
  );
};

export default RoomsList;
