import { colors } from "./colors";
import * as abeezee from "@fontsource/abeezee";
import * as Inter from "@fontsource/inter";
import * as WorkSans from "@fontsource/work-sans";

export const fonts = {
  primary: "Inter",
  secondary: "Inter",
};

export const typography = {
  text: {
    xs: `
    font-size: 0.75rem; 
    line-height: 1rem;
    `,
    sm: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
    md: `
    font-size: 1rem;
    line-height: 1.5rem;
    `,
    lg: `
    font-size: 1.125rem;
    line-height: 1.75rem;
    `,
    xl: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,
  },
  head: {
    xs: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,
    sm: `
    font-size: 1.5rem;
    line-height: 2rem;
    `,
    md: `
    font-size: 1.75rem;
    line-height: 2.25rem;
    `,
    lg: `
    font-size: 2.25rem;
    line-height: 2.5rem;
    `,
    xl: `
    font-size: 3rem;
    line-height: 3rem;
    `,
    xxl: `
    font-size: 3.75rem;
    line-height: 3.75rem;
    `,
  },
};

for (const size in typography.text) {
  typography.text[size] += `
  font-family: ${fonts.primary};
  font-weight: 300;
  `;
}

for (const size in typography.head) {
  typography.head[size] += `
  font-family: ${fonts.secondary};
  font-weight: 700;
  `;
}
