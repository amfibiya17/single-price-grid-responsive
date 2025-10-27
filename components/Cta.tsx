import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

const Cta = () => {
  return (
    <Box
      sx={{
        padding: "2.5rem",
        backgroundColor: "#2ab3b1",
        maxWidth: "19.875rem",
      }}
    >
      <Typography
        sx={{ color: "#ffffff", fontSize: "1.125rem", fontWeight: "600" }}
      >
        Monthly Subscription
      </Typography>
      <Typography
        sx={{
          color: "#ffffff",
          fontSize: "2rem",
          fontWeight: "800",
          display: "flex",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        £29
        <span
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            fontWeight: 400,
            fontSize: "1rem",
            marginLeft: "0.75rem",
          }}
        >
          per month
        </span>
      </Typography>
      <Typography sx={{ color: "#ffffff" }}>
        Full access for les than £1 a day
      </Typography>
      <Button
        sx={{
          marginTop: "1.5rem",
          backgroundColor: "#C0DF33",
          color: "#ffffff",
          width: "100%",
          textTransform: "none",
          fontWeight: "800",
          padding: "1rem",
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Cta;
