import { SxProps, Theme } from "@mui/material/styles";
import type React from "react";

export const Styles = {
  /** Home */
  homeRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "98vh",
  } as SxProps<Theme>,

  /** CardContainer */
  cardContainerRoot: {
    maxWidth: "39.6875rem",
    maxHeight: "29.6875rem",
  } as SxProps<Theme>,

  gridCols: (mobile: boolean): SxProps<Theme> => ({
    display: "grid",
    gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
  }),

  /** CardHeader */
  headerRoot: {
    padding: "2.5rem",
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem 0.5rem 0 0",
  } as SxProps<Theme>,

  headerTitle: {
    fontSize: "1.5rem",
    color: "#2ab3b1",
    fontWeight: 600,
  } as SxProps<Theme>,

  headerSubtitle: {
    fontSize: "1.125rem",
    color: "#c0df33",
    fontWeight: 600,
    margin: "1.5rem 0 0.75rem 0",
  } as SxProps<Theme>,

  headerBody: { color: "#9aa7be" } as SxProps<Theme>,

  /** CTA */
  ctaRoot: (mobile: boolean): SxProps<Theme> => ({
    padding: "2.5rem",
    backgroundColor: "#2ab3b1",
    maxWidth: { sm: "19.875rem" },
    borderRadius: mobile ? "0" : "0 0 0 0.5rem",
  }),

  ctaPlan: {
    color: "#ffffff",
    fontSize: "1.125rem",
    fontWeight: 600,
  } as SxProps<Theme>,

  ctaPriceRow: {
    color: "#ffffff",
    fontSize: "2rem",
    fontWeight: 800,
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
  } as SxProps<Theme>,

  ctaPriceMutedSpan: {
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: 400,
    fontSize: "1rem",
    marginLeft: "0.75rem",
  } as React.CSSProperties,

  ctaNote: { color: "#ffffff" } as SxProps<Theme>,

  ctaButton: {
    marginTop: "1.5rem",
    backgroundColor: "#c0df33",
    color: "#ffffff",
    width: "100%",
    textTransform: "none",
    fontSize: "1.2rem",
    fontWeight: 600,
    padding: "1rem",
  } as SxProps<Theme>,

  /** WhyUs */
  whyRoot: (mobile: boolean): SxProps<Theme> => ({
    padding: "2.5rem",
    backgroundColor: "#4abdbd",
    maxWidth: { sm: "19.875rem" },
    borderRadius: mobile ? "0 0 0.5rem 0.5rem" : "0 0 0.5rem 0",
  }),

  whyTitle: {
    color: "#ffffff",
    fontSize: "1.125rem",
    fontWeight: 600,
  } as SxProps<Theme>,

  whyItemFirst: {
    color: "#ffffff",
    marginTop: "1rem",
  } as SxProps<Theme>,

  whyItem: { color: "#ffffff" } as SxProps<Theme>,
} as const;
