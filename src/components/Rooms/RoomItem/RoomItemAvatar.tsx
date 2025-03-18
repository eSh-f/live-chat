import React, { FC } from "react";

import Avatar from "@mui/material/Avatar";
import { ListItemAvatar } from "@mui/material";

interface IRoomItemAvatarProps {
  name: string;
  id: number;
}

const RoomItemAvatar: FC<IRoomItemAvatarProps> = ({ name, id }) => {
  const avatarUrl = `https://randomuser.me/api/portraits/men/${id % 600}.jpg`;

  return (
    <ListItemAvatar>
      <Avatar src={avatarUrl} alt={`Avatar for ${name}`}></Avatar>
    </ListItemAvatar>
  );
};

export default RoomItemAvatar;
