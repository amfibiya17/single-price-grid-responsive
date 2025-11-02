import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const WhyUsContainer = () => {
  const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });

  return (
    <Box
      sx={{
        padding: "2.5rem",
        backgroundColor: "#4abdbd",
        maxWidth: "19.875rem",
        borderRadius: mobile ? "0 0 0.5rem 0.5rem" : "0 0 0.5rem 0",
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
          Tutorials by industry experts
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          Peer & expert code review
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          Coding exercises
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          Access to our GitHub repos
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          Community forum
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          Flashcard decks
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          New videos every week
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyUsContainer;
