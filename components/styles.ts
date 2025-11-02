import { SxProps, Theme } from "@mui/material/styles";

/** Home */
export const homeRoot: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "98vh",
};

/** CardContainer */
export const cardContainerRoot: SxProps<Theme> = {
  maxWidth: "39.6875rem",
  maxHeight: "29.6875rem",
};

export const gridCols = (mobile: boolean): SxProps<Theme> => ({
  display: "grid",
  gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
});

/** CardHeader */
export const headerRoot: SxProps<Theme> = {
  padding: "2.5rem",
  backgroundColor: "#ffffff",
  borderRadius: "0.5rem 0.5rem 0 0",
};

export const headerTitle: SxProps<Theme> = {
  fontSize: "1.5rem",
  color: "#2ab3b1",
  fontWeight: "600",
};

export const headerSubtitle: SxProps<Theme> = {
  fontSize: "1.125rem",
  color: "#c0df33",
  fontWeight: "600",
  margin: "1.5rem 0 0.75rem 0",
};

export const headerBody: SxProps<Theme> = {
  color: "#9aa7be",
};

/** CTA */
export const ctaRoot = (mobile: boolean): SxProps<Theme> => ({
  padding: "2.5rem",
  backgroundColor: "#2ab3b1",
  maxWidth: { sm: "19.875rem" },
  borderRadius: mobile ? "0" : "0 0 0 0.5rem",
});

export const ctaPlan: SxProps<Theme> = {
  color: "#ffffff",
  fontSize: "1.125rem",
  fontWeight: "600",
};

export const ctaPriceRow: SxProps<Theme> = {
  color: "#ffffff",
  fontSize: "2rem",
  fontWeight: "800",
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
};

export const ctaPriceMutedSpan: React.CSSProperties = {
  color: "rgba(255, 255, 255, 0.5)",
  fontWeight: 400,
  fontSize: "1rem",
  marginLeft: "0.75rem",
};

export const ctaNote: SxProps<Theme> = {
  color: "#ffffff",
};

export const ctaButton: SxProps<Theme> = {
  marginTop: "1.5rem",
  backgroundColor: "#c0df33",
  color: "#ffffff",
  width: "100%",
  textTransform: "none",
  fontSize: "1.2rem",
  fontWeight: "600",
  padding: "1rem",
};

/** WhyUs */
export const whyRoot = (mobile: boolean): SxProps<Theme> => ({
  padding: "2.5rem",
  backgroundColor: "#4abdbd",
  maxWidth: { sm: "19.875rem" },
  borderRadius: mobile ? "0 0 0.5rem 0.5rem" : "0 0 0.5rem 0",
});

export const whyTitle: SxProps<Theme> = {
  color: "#ffffff",
  fontSize: "1.125rem",
  fontWeight: "600",
};

export const whyItemFirst: SxProps<Theme> = {
  color: "#ffffff",
  marginTop: "1rem",
};

export const whyItem: SxProps<Theme> = {
  color: "#ffffff",
};
