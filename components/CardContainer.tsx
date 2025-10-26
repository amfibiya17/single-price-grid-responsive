import Box from "@mui/material/Box";
import React from "react";
import CardHeader from "./CardHeader";

const CardContainer = () => {
  return (
    <Box
      sx={{
        maxWidth: "39.6875rem",
        maxHeight: "29.6875rem",
      }}
    >
      <CardHeader />
    </Box>
  );
};

export default CardContainer;
