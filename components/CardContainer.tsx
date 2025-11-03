"use client";
import Box from "@mui/material/Box";
import React from "react";
import CardHeader from "./CardHeader";
import WhyUsContainer from "./WhyUsContainer";
import Cta from "./Cta";

import { Styles } from "./styles";

const CardContainer = () => {
  return (
    <Box sx={Styles.cardContainerRoot}>
      <CardHeader />
      <Box sx={Styles.gridCols}>
        <Cta />
        <WhyUsContainer />
      </Box>
    </Box>
  );
};

export default CardContainer;
