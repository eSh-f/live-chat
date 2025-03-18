import React, { FC } from "react";
import { IMessage } from "../../store/slices/roomOneSlice";
import { Box, Typography } from "@mui/material";

interface IMessageItemProps {
  message: IMessage;
  currentUserId: number | null;
}

const MessageItem: FC<IMessageItemProps> = ({ message, currentUserId }) => {
  const isMyMessage = message.user_id === currentUserId;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isMyMessage ? "flex-end" : "flex-start",
        paddingX: "10px",
      }}
    >
      <Box
        sx={{
          maxWidth: "70%",
          padding: "12px",
          borderRadius: "16px",
          bgcolor: isMyMessage ? "white" : "grey.200",
          boxShadow: isMyMessage
            ? "2px 2px 10px rgba(0, 123, 255, 0.3)"
            : "2px 2px 10px rgba(0, 0, 0, 0.1)",
          wordBreak: "break-word",
          marginBottom: "8px",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            right: isMyMessage ? "-10px" : "auto",
            left: isMyMessage ? "auto" : "-10px",
            width: "10px",
            height: "10px",
            backgroundColor: isMyMessage ? "primary.main" : "grey.200",
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            fontSize: "14px",
            marginBottom: "4px",
            opacity: 0.8,
          }}
        >
          {message.user.username}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "15px" }}>
          {message.content}
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", marginTop: "6px" }}
        >
          <Typography sx={{ fontSize: "10px", opacity: 0.7 }}>
            {new Date(message.createdAt).toLocaleTimeString("ru-RU", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageItem;
