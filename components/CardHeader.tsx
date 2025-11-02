import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { headerCopy } from "../src/content/pricing";

import { Styles } from "./styles";

const CardHeader = () => {
  return (
    <Box sx={Styles.headerRoot}>
      <Typography sx={Styles.headerTitle}>{headerCopy.title}</Typography>
      <Typography sx={Styles.headerSubtitle}>{headerCopy.subtitle}</Typography>
      <Typography sx={Styles.headerBody}>{headerCopy.body}</Typography>
    </Box>
  );
};

export default CardHeader;
