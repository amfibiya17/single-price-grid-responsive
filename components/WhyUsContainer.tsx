import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const WhyUsContainer = () => {
  return (
    <Box
      sx={{
        padding: "2.5rem",
        backgroundColor: "#4abdbd",
        maxWidth: "19.875rem",
        borderRadius: "0 0 0.5rem 0",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "1.125rem",
            fontWeight: "600",
          }}
        >
          Why Choose Us
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            marginTop: "1rem",
          }}
        >
          Easy-to-follow tutorials
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          Feedback that builds confidence
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          Quick, hands-on challenges
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          Peer support and discussion spaces
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          Track your growth with progress tools
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          New lessons added every week
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          Learn at your own pace
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyUsContainer;
