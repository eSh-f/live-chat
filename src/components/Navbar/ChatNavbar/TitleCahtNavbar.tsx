import React from "react";
import { useGetOneRoomQuery } from "../../../store/RTK Query/roomApi";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import RoomItemAvatar from "../../Rooms/RoomItem/RoomItemAvatar";

const TitleChatNavbar = () => {
  const { roomId } = useParams();
  const { data: roomDetails, isLoading } = useGetOneRoomQuery(Number(roomId));

  return (
    <Box>
      {roomId && !isLoading && roomDetails && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: { xs: "30px", sm: "10px" },
            gap: 1, // Добавляем отступ между аватаркой и текстом
          }}
        >
          <RoomItemAvatar name={roomDetails?.name} id={Number(roomId)} />
          <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            {roomDetails.name}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TitleChatNavbar;
