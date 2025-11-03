import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { whyUsCopy } from "@/content/pricing";

import { Styles } from "./styles";

const WhyUsContainer = () => {
  return (
    <Box sx={Styles.whyRoot}>
      <Typography sx={Styles.whyTitle}>{whyUsCopy.title}</Typography>
      {whyUsCopy.items.map((text, idx) => (
        <Typography key={text} sx={idx === 0 ? Styles.whyItemFirst : Styles.whyItem}>
          {text}
        </Typography>
      ))}
    </Box>
  );
};

export default WhyUsContainer;
