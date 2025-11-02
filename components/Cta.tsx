import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  ctaRoot,
  ctaPlan,
  ctaPriceRow,
  ctaPriceMutedSpan,
  ctaNote,
  ctaButton,
} from "./styles";

const Cta = () => {
  const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });

  return (
    <Box sx={ctaRoot(mobile)}>
      <Typography sx={ctaPlan}>Monthly Plan</Typography>
      <Typography sx={ctaPriceRow}>
        £33
        <span style={ctaPriceMutedSpan}>per month</span>
      </Typography>
      <Typography sx={ctaNote}>Unlimited access to everything</Typography>
      <Button sx={ctaButton}>Join the community</Button>
    </Box>
  );
};

export default Cta;
