import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { Styles } from "./styles";

const CardHeader = () => {
  return (
    <Box sx={Styles.headerRoot}>
      <Typography sx={Styles.headerTitle}>
        Become part of our learning family
      </Typography>
      <Typography sx={Styles.headerSubtitle}>
        Try it risk-free for 30 days
      </Typography>
      <Typography sx={Styles.headerBody}>
        Build your skills with bite-size lessons, expert guidance, and an
        encouraging community that celebrates your wins and helps you keep
        moving forward.
      </Typography>
    </Box>
  );
};

export default CardHeader;
