import { Box, Fab } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../ModalWindow/Modal";
import CreateRoomForm from "./CreateRoomForm";

const CreateRooms = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box>
        <Fab
          sx={{ bgcolor: "white", boxShadow: "none" }}
          size="small"
          aria-label="add"
          onClick={() => setOpen(true)}
        >
          <AddIcon
            sx={{
              animation: "breath 2s infinite ease-in-out",
              "@keyframes breath": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.9)" },
                "100%": { transform: "scale(1)" },
              },
            }}
          />
        </Fab>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CreateRoomForm onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default CreateRooms;
