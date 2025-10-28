"use client";
import Box from "@mui/material/Box";
import React from "react";
import CardHeader from "./CardHeader";
import WhyUsContainer from "./WhyUsContainer";
import Cta from "./Cta";
import useMediaQuery from "@mui/material/useMediaQuery";

const CardContainer = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        maxWidth: "39.6875rem",
        maxHeight: "29.6875rem",
        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
      }}
    >
      <CardHeader />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        }}
      >
        <Cta />
        <WhyUsContainer />
      </Box>
    </Box>
  );
};

export default CardContainer;
