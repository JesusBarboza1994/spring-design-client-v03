import { useAuth } from "../context/auth-context";

export const basicColors = {
  
  blackfondo: "#161A1D",
  black: "#000000",
  white: "#FFFFFF",
  
  gray:{
    dark: "#363636", //
    medium: "#B1A7A6",
    light: "#D9D9D9", //
  },

  red: {
    dark: "#660708",
    medium: "A4161A", //
    light: "#BA181B",
  },

  pink: {
    dark: "#E5383B",
    medium: "#F34949", //
    
  },

 /* blue:{
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
  },*/
  
};

export const colors = {
  
  primary:{
    dark:basicColors.red.dark,
    medium:basicColors.red.medium,
    light:basicColors.red.light,
  }, 
  secondary:{
    dark:basicColors.gray.dark,
    medium:basicColors.gray.medium,
    light:basicColors.gray.light,
  },
  tertiary:{
    dark: basicColors.pink.dark,
    medium: basicColors.pink.medium,
  },
  font: {
    text: basicColors.black,
    title: basicColors.white,
  },
  button: {
    text: basicColors.white,
    secondary: basicColors.gray.dark,
    secondary2: basicColors.gray.medium,
    tertiary: basicColors.pink.medium,
  },
  cell: basicColors.white,
  icon: basicColors.black,
  tablebackground: basicColors.black,
  background: basicColors.blackfondo,
}

export const ColorStyle = (dark) =>{
  
  return {
    text: dark ? colors.font.title : colors.font.text,
    //background: colors.background,
    button: colors.button.tertiary,
    mainText: colors.button.text,
    mainBackground: dark ? colors.background : basicColors.white,
    backCard: dark ? colors.tertiary.dark : colors.tertiary.medium,
    textHover: dark ? colors.secondary.light : basicColors.white,
    switch: dark ? colors.secondary.dark : colors.secondary.medium,
    buttonNav: dark ? colors.button.tertiary : colors.button.tertiary
  }
}