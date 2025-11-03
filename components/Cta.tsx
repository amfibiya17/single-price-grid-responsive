import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { ctaCopy } from "../src/content/pricing";

import { Styles } from "./styles";

const Cta = () => {
  return (
    <Box sx={Styles.ctaRoot}>
      <Typography sx={Styles.ctaPlan}>{ctaCopy.planLabel}</Typography>
      <Typography sx={Styles.ctaPriceRow}>
        {ctaCopy.currencySymbol}
        {ctaCopy.price}
        <span style={Styles.ctaPriceMutedSpan}>{ctaCopy.priceNote}</span>
      </Typography>
      <Typography sx={Styles.ctaNote}>{ctaCopy.note}</Typography>
      <Button sx={Styles.ctaButton}>{ctaCopy.button}</Button>
    </Box>
  );
};

export default Cta;
