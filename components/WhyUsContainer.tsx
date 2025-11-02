import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Styles } from "./styles";

const WhyUsContainer = () => {
  const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });

  return (
    <Box sx={Styles.whyRoot(mobile)}>
      <Box>
        <Typography sx={Styles.whyTitle}>Why Choose Us</Typography>
        <Typography sx={Styles.whyItemFirst}>
          Tutorials by industry experts
        </Typography>
        <Typography sx={Styles.whyItem}>Peer & expert code review</Typography>
        <Typography sx={Styles.whyItem}>Coding exercises</Typography>
        <Typography sx={Styles.whyItem}>Access to our GitHub repos</Typography>
        <Typography sx={Styles.whyItem}>Community forum</Typography>
        <Typography sx={Styles.whyItem}>Flashcard decks</Typography>
        <Typography sx={Styles.whyItem}>New videos every week</Typography>
      </Box>
    </Box>
  );
};

export default WhyUsContainer;
