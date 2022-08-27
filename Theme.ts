import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1264,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#2A4365",
      dark: "#4299E1",
      light: "#EDF2F7",
    },
    text: {
      primary: "#E5E5E5",
      secondary: "#fff",
    },
  },
  typography: {
    fontFamily: "'League Spartan', sans-serif;",
    h1: {
      fontSize: "58px",
      lineHeight: "80px",
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "62px",
    },
    h3: {
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "44px",
    },
    body1: {
      fontSize: "14px",
      lineHeight: "16px",
    },
    body2: {
      fontSize: "18px",
      lineHeight: "30px",
    },
    button: {
      fontSize: "16px",
      lineHeight: "19px",
      textTransform: "none",
    },
  },
});

export default theme;
