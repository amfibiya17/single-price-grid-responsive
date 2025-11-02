"use client";
import Box from "@mui/material/Box";
import React from "react";
import CardHeader from "./CardHeader";
import WhyUsContainer from "./WhyUsContainer";
import Cta from "./Cta";
import useMediaQuery from "@mui/material/useMediaQuery";
import { cardContainerRoot, gridCols } from "./styles";

const CardContainer = () => {
  const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });

  return (
    <Box sx={cardContainerRoot}>
      <CardHeader />
      <Box sx={gridCols(mobile)}>
        <Cta />
        <WhyUsContainer />
      </Box>
    </Box>
  );
};

export default CardContainer;
