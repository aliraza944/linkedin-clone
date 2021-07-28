import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",

        p: "h5",
        subtitle1: "h2",
        subtitle2: "h4",
        body1: "span",
        body2: "span",
      },
    },
  },
  typography: {
    h1: {
      fontSize: "4em",
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".justifyCenter": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".justifyAround": {
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        },
        ".justifyBetween": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },

        ".link": {
          textDecoration: "none",
          color: "white",
        },
        ".spinner": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
      },
    },
  },
});

export default theme;
