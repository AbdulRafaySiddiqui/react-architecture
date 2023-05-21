import "@emotion/react";
import { createTheme, Theme as MuiTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    laptopHD: true;
    laptopFHD: true;
    laptop2K: true;
    laptop4K: true;
  }
}

// store the palette in a separate variable, so we can use it in other components of theme
const colorPalette = {
  primary: {
    main: "#00AB55",
    dark: "#006b36",
    light: "#00e371",
  },
  secondary: {
    main: "#24292E",
    dark: "#121517",
    light: "#2b2e30",
  },
};

export const theme: MuiTheme = createTheme({
  palette: colorPalette,

  components: {
    MuiCard: {
      defaultProps: {
        color: colorPalette.primary.light,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
      mobile: 0,
      tablet: 640,
      laptopHD: 1024,
      laptopFHD: 1200,
      laptop2K: 1440,
      laptop4K: 2100,
    },
  },
});

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {}
}
