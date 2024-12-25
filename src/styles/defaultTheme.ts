import { breakpoints } from "./breakpoints";
export const lightTheme = {
  colors: {
    background: "#ffffff",
    text: "#000000",
    primary: "#007bff",
    secondary: "#6c757d",
  },
  breakpoints
};

export const darkTheme = {
  colors: {
    background: "#121212",
    text: "#ffffff",
    primary: "#bb86fc",
    secondary: "#03dac6",
  },
  breakpoints
};

export type Theme = typeof lightTheme;
