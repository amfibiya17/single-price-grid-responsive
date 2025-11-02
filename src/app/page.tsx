import Box from "@mui/material/Box";
import React from "react";
import CardContainer from "../../components/CardContainer";

import { Styles } from "../../components/styles";

const Home = () => {
  return (
    <Box sx={Styles.homeRoot}>
      <CardContainer />
    </Box>
  );
};

export default Home;
