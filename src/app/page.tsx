import Box from "@mui/material/Box";
import React from "react";
import CardContainer from "../../components/CardContainer";
import { homeRoot } from "../../components/styles";

const Home = () => {
  return (
    <Box sx={homeRoot}>
      <CardContainer />
    </Box>
  );
};

export default Home;
