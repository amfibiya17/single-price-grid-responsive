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
        Join our community
      </Typography>
      <Typography
        sx={{
          fontSize: "1.125rem",
          color: "#c0df33",
          fontWeight: "600",
          margin: "1.5rem 0 0.75rem 0",
        }}
      >
        30-day, hassle-free money back guarantee
      </Typography>
      <Typography sx={{ color: "#9aa7be" }}>
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.
      </Typography>
    </Box>
  );
};

export default CardHeader;
