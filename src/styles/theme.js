import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    primary: {
      700: "#996DFF",
    },
    secondary: {
      700: "#FBA94C",
    },
    green: {
      700: "#00875F",
      500: "#00B37E",
      300: "#04D361",
    },
    brown: {
      700: "#735f4a",
      600: "#8D7B68",
      500: "#A4907C",
      300: "#C8B6A6",
      100: "#F1DEC9",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
      50: "rgba(60, 60, 60, 0.4)",
      25: "rgba(255, 255, 255, 0.24)",
    },
    white: "#FFFFFF",

    yellow: {
      800: "rgba(255, 240, 101,1)",
      400: "rgba(255, 240, 101, 0.4)",
    },
  },
  fonts: {
    heading: "Lato_700Bold",
    body: "Lato_400Regular",

    greatVibes: "GreatVibes_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
});
