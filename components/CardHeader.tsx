import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { headerRoot, headerTitle, headerSubtitle, headerBody } from "./styles";

const CardHeader = () => {
  return (
    <Box sx={headerRoot}>
      <Typography sx={headerTitle}>
        Become part of our learning family
      </Typography>
      <Typography sx={headerSubtitle}>Try it risk-free for 30 days</Typography>
      <Typography sx={headerBody}>
        Build your skills with bite-size lessons, expert guidance, and an
        encouraging community that celebrates your wins and helps you keep
        moving forward.
      </Typography>
    </Box>
  );
};

export default CardHeader;
