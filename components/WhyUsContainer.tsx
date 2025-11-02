import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { whyUsCopy } from "@/content/pricing";

import { Styles } from "./styles";

const WhyUsContainer = () => {
  const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });

  return (
    <Box sx={Styles.whyRoot(mobile)}>
      <Box>
        <Typography sx={Styles.whyTitle}>{whyUsCopy.title}</Typography>
        {whyUsCopy.items.map((text, idx) => (
          <Typography
            key={text}
            sx={idx === 0 ? Styles.whyItemFirst : Styles.whyItem}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default WhyUsContainer;
