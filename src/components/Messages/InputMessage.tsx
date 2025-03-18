import { Box, IconButton, TextareaAutosize } from "@mui/material";
import React, { FC, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useSendMessageMutation } from "../../store/RTK Query/messageApi";
import { useParams } from "react-router-dom";

const InputMessage: FC = () => {
  const { roomId } = useParams();
  const [value, setValue] = useState("");

  const [sendMessage] = useSendMessageMutation();

  const handleSendMessage = async () => {
    if (!value.trim()) return;
    try {
      await sendMessage({ roomId: Number(roomId), content: value }).unwrap();
      setValue("");
    } catch (err) {
      console.error("Ошибка отправки сообщения:", err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "white",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        width: "100%",
      }}
    >
      {/* 🔹 Поле ввода */}
      <TextareaAutosize
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
        minRows={1}
        maxRows={6}
        style={{
          flex: 1,
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          fontSize: "16px",
          padding: "8px",
          resize: "none",
          overflow: "hidden",
        }}
        aria-label="message input"
        placeholder="Введите сообщение..."
      />

      {/* 🔹 Кнопка отправки */}
      <IconButton
        onClick={handleSendMessage}
        sx={{
          bgcolor: "#007AFF",
          color: "white",
          borderRadius: "50%",
          padding: "8px",
          marginLeft: "10px",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
            bgcolor: "#005BBB",
          },
          "&:disabled": {
            bgcolor: "#ccc",
          },
        }}
        disabled={!value.trim()}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default InputMessage;
