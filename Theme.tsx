import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    primaryColors: {
      colorOne: "#FAFCFF",
      colorTwo: "#66A1FF",
      colorThree: "#0052FF",
      colorFour: "#002EB7",
      colorFive: "#00177A",
    },
    semanticColors: {
      colorOne: "#E9F7EC",
      colorTwo: "#46BF31",
      colorThree: "#FFF6ED",
      colorFour: "#FFA74F",
      colorFive: "#F3E6EB",
      colorSix: "#871A33",
    },
    greyShades: {
      colorOne: "#F2F2F7",
      colorTwo: "#ECECF7",
      colorThree: "#B4B4CF",
      colorFour: "#4B4B60",
      colorFive: "#252545",
      colorSix: "#0E0E2E",
      colorSeven: "#FFFFFF",
    },
    textColors: {
      colorOne: "#B2B2B9",
      colorTwo: "#7D7D89",
      colorThree: "#343446",
    },
  },
  typography: {
    h4: {
      fontFamily: "Graphik",
      fontSize: "40px",
      lineHeight: "54px",
    },
    h6: {
      fontFamily: "Graphik",
      fontSize: "24px",
      lineHeight: "34px",
    },

    subtitle1: {
      fontFamily: "Graphik",
      fontSize: "20px",
      lineHeight: "28px",
    },

    subtitle2: {
      fontFamily: "Graphik",
      fontSize: "20px",
      lineHeight: "28px",
    },
    body1: {
      fontFamily: "Graphik",
      fontSize: "16px",
      lineHeight: "22px",
    },

    body2: {
      fontFamily: "Graphik",
      fontSize: "16px",
      lineHeight: "22px",
    },
    button: {
      fontFamily: "Graphik",
      fontSize: "14px",
      lineHeight: "42px",
    },
    caption1: {
      fontFamily: "Graphik",
      fontSize: "14px",
      lineHeight: "16px",
    },
    caption2: {
      fontFamily: "Graphik",
      fontSize: "14px",
      lineHeight: "16px",
    },
    overline: {
      fontFamily: "Graphik",
      fontSize: "12px",
      lineHeight: "14px",
    },
  },
});
