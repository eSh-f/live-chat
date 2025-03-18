import React, { FC } from "react";
import { IUser } from "../../store/slices/roomOneSlice";
import { Box, Typography } from "@mui/material";
interface IUserItemProps {
  user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <Box>
      <Typography> {user.username} </Typography>
    </Box>
  );
};

export default UserItem;
