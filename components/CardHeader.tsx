import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const CardHeader = () => {
  return (
    <Box
      sx={{
        padding: "2.5rem",
        backgroundColor: "#ffffff",
        borderRadius: "0.5rem 0.5rem 0 0",
      }}
    >
      <Typography
        sx={{ fontSize: "1.5rem", color: "#2ab3b1", fontWeight: "600" }}
      >
        Become part of our learning family
      </Typography>
      <Typography
        sx={{
          fontSize: "1.125rem",
          color: "#c0df33",
          fontWeight: "600",
          margin: "1.5rem 0 0.75rem 0",
        }}
      >
        Try it risk-free for 30 days
      </Typography>
      <Typography sx={{ color: "#9aa7be" }}>
        Build your skills with bite-size lessons, expert guidance, and an
        encouraging community that celebrates your wins and helps you keep
        moving forward.
      </Typography>
    </Box>
  );
};

export default CardHeader;
