import React, { useEffect, useRef, FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { IMessage } from "../../store/slices/roomOneSlice";
import { useParams } from "react-router-dom";
import {
  IRoomDetails,
  useGetOneRoomQuery,
  useSendMessageSystemMutation,
} from "../../store/RTK Query/roomApi";
import MessageItem from "./MessageItem";
import StartChatPage from "../../pages/ChatPage/StartChatPage/StartChatPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useGetUserProfileQuery } from "../../store/RTK Query/userApi";
import { setPreviousRoomId } from "../../store/slices/roomSlice";

interface IMessagesListProps {
  searchMessage: string;
}
//работает
const MessagesList: FC<IMessagesListProps> = ({ searchMessage }) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state: RootState) => state.auth.userId);
  const previousRoomId = useSelector(
    (state: RootState) => state.room.previousRoomId,
  );
  const { data: userData } = useGetUserProfileQuery(currentUserId!);

  const { roomId } = useParams();
  const {
    data: roomDetails,
    error,
    isLoading,
  } = useGetOneRoomQuery(Number(roomId), {
    pollingInterval: 3000, // Обновлять сообщения раз в 3 секунды
  });

  const [sendMessage] = useSendMessageSystemMutation();

  const filteredMessages =
    roomDetails?.messages.filter((message: IMessage) =>
      message.content.toLowerCase().includes(searchMessage.toLowerCase()),
    ) || [];

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [filteredMessages]);

  const currentRoomRef = useRef<number | null>(null); //для хранения текущей комнаты
  useEffect(() => {
    if (roomId && userData) {
      const roomIdNumber = Number(roomId);

      if (currentRoomRef.current !== roomIdNumber) {
        sendMessage({
          roomId: roomIdNumber,
          content: `🔑 Пользователь ${userData.username} вошёл в комнату`,
        });
        currentRoomRef.current = roomIdNumber;
      }

      if (previousRoomId && previousRoomId !== roomIdNumber && userData) {
        sendMessage({
          roomId: previousRoomId,
          content: `🔑 Пользователь ${userData.username} вышел из комнаты`,
        });
      }
      dispatch(setPreviousRoomId(roomIdNumber));
    }
  }, [roomId, sendMessage, userData, previousRoomId, dispatch]);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: roomId ? "space-between" : "center",
        gap: 1,
        padding: 1,
        overflowY: "auto",
        flexGrow: 1,
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {isLoading && <CircularProgress />} ||
        {!roomId && !isLoading && <StartChatPage />}
      </Box>

      <Box>
        {filteredMessages.map((message: IMessage) => (
          <React.Fragment key={message.id}>
            {message.content.startsWith("🔑") ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  sx={{
                    color: "white",
                    bgcolor: "gray",
                    margin: 1,
                    padding: 1,
                    borderRadius: 5,
                  }}
                >
                  {message.content}
                </Typography>
              </Box>
            ) : (
              <MessageItem message={message} currentUserId={currentUserId} />
            )}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </Box>
    </Box>
  );
};

export default MessagesList;
