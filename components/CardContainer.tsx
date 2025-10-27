import Box from "@mui/material/Box";
import React from "react";
import CardHeader from "./CardHeader";
import Cta from "./Cta";

const CardContainer = () => {
  return (
    <Box
      sx={{
        maxWidth: "39.6875rem",
        maxHeight: "29.6875rem",
      }}
    >
      <CardHeader />
      <Box>
        <Cta />
      </Box>
    </Box>
  );
};

export default CardContainer;
