import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { whyRoot, whyTitle, whyItemFirst, whyItem } from "./styles";

const WhyUsContainer = () => {
  const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });

  return (
    <Box sx={whyRoot(mobile)}>
      <Box>
        <Typography sx={whyTitle}>Why Choose Us</Typography>
        <Typography sx={whyItemFirst}>Tutorials by industry experts</Typography>
        <Typography sx={whyItem}>Peer & expert code review</Typography>
        <Typography sx={whyItem}>Coding exercises</Typography>
        <Typography sx={whyItem}>Access to our GitHub repos</Typography>
        <Typography sx={whyItem}>Community forum</Typography>
        <Typography sx={whyItem}>Flashcard decks</Typography>
        <Typography sx={whyItem}>New videos every week</Typography>
      </Box>
    </Box>
  );
};

export default WhyUsContainer;
