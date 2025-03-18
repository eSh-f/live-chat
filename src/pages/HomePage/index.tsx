import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import LoginRegister from "../../components/ModalWindow/LoginRegister";

function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: { xs: "20px", sm: "30px", md: "40px" },
        width: "100%",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { xs: "20px", sm: "30px", md: "40px" },
          borderRadius: "15px",
          maxWidth: "450px",
          textAlign: "center",
          width: { xs: "90%", sm: "auto0" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: { xs: "15px", sm: "20px" },
            fontSize: { xs: "24px", sm: "32px" },
            wordBreak: "break-word",
          }}
        >
          Добро пожаловать в Life Chat!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "gray",
            fontSize: { xs: "14px", sm: "16px" },
            lineHeight: { xs: "1.4", sm: "1.6" },
          }}
        >
          Общайся, заводи друзей и наслаждайся удобным чатом в любое время!
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <LoginRegister sx={{ width: { xs: "100%", sm: "auto" } }} />
        </Box>
      </Paper>
    </Box>
  );
}

export default HomePage;
