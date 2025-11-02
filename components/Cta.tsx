import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Styles } from "./styles";

const Cta = () => {
  const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });

  return (
    <Box sx={Styles.ctaRoot(mobile)}>
      <Typography sx={Styles.ctaPlan}>Monthly Plan</Typography>
      <Typography sx={Styles.ctaPriceRow}>
        £33
        <span style={Styles.ctaPriceMutedSpan}>per month</span>
      </Typography>
      <Typography sx={Styles.ctaNote}>
        Unlimited access to everything
      </Typography>
      <Button sx={Styles.ctaButton}>Join the community</Button>
    </Box>
  );
};

export default Cta;
