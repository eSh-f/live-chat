import React from "react";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import { useLocation, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { roomApi } from "../../../store/RTK Query/roomApi";

const ChatExitRoomButtom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleExit = () => {
    dispatch(roomApi.util.resetApiState());
    navigate("/chat");
  };

  return (
    <>
      {location.pathname !== "/chat" && (
        <div>
          <IconButton onClick={handleExit}>
            <Tooltip title="Выйти из комнаты">
              <DoorFrontIcon />
            </Tooltip>
          </IconButton>
        </div>
      )}
    </>
  );
};

export default ChatExitRoomButtom;
