import { Box, Button } from "@mui/material";
import React, { useCallback, useState, FC } from "react";
import { useLogoutUserMutation } from "../../store/RTK Query/loginApi";
import { useNavigate } from "react-router-dom";
import Modal from "components/ModalWindow/Modal";
import LogoutModal from "../ModalWindow/LogoutModal";

interface LogoutButtonProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const LogoutButton: FC<LogoutButtonProps> = ({ openModal, setOpenModal }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [logout] = useLogoutUserMutation();

  const exit = useCallback(() => {
    logout();
    navigate("/");
    setOpen(false);
  }, []);

  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(!openModal)}>
        <LogoutModal exit={exit} onClose={() => setOpenModal(false)} />
      </Modal>
    </>
  );
};

export default LogoutButton;
