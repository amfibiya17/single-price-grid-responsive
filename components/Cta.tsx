import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const Cta = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        padding: "2.5rem",
        backgroundColor: "#2ab3b1",
        maxWidth: "19.875rem",
        borderRadius: mobile ? "0" : "0 0 0 0.5rem",
      }}
    >
      <Typography
        sx={{ color: "#ffffff", fontSize: "1.125rem", fontWeight: "600" }}
      >
        Monthly Plan
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
        £33
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
        Unlimited access to everything
      </Typography>
      <Button
        sx={{
          marginTop: "1.5rem",
          backgroundColor: "#c0df33",
          color: "#ffffff",
          width: "100%",
          textTransform: "none",
          fontSize: "1.2rem",
          fontWeight: "600",
          padding: "1rem",
        }}
      >
        Join the community
      </Button>
    </Box>
  );
};

export default Cta;
