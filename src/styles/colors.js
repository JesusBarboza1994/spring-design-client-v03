import { grey } from "@mui/material/colors";
import { useAuth } from "../context/auth-context";

export const colors = {
  gray:{
    dark:"#212121",
    medium: "#333649",
    light: "#C7CADE"
  },
  blue:{
    100: "#086CB5",
    200: "#212438"
  },
  stone: {
    50: "#FAFAF9",
    100: "#F5F5F4",
    200: "#E7E5E4",
    300: "#D6D3D1",
    400: "#A8A29E",
    500: "#78716C",
    600: "#57534E",
    700: "#44403C",
    800: "#292524",
    900: "#1C1917",
  },
  blackfondo: "#161A1D",
  black: "black",
  white: "#FFFFFF",
  gray: "#363636",
  purple: "#adc5fff1",
  back: "#fc1221c5",
  grey: "gray",
  red: "#BA181B",
  pink: "#F34949",
};

export const ColorStyle = (dark) =>{
  
  return {
    text: dark ? colors.white : colors.black,
    background: colors.black,
    button: colors.blue[100],
    mainText: colors.blue[100],
    mainBackground: dark ? colors.black : colors.white,
    backCard: dark ? colors.blue[200]: colors.gray.light,
    textHover: dark ? colors.gray.light : colors.white,
    switch: dark ? colors.black : colors.white,
    buttonNav: dark ? colors.blue[100] : colors.blue[100]
  }
}