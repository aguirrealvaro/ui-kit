type FontFamilyType = {
  heading: string;
  body: string;
  mono: string;
};

type FontSize =
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

type FontSizeType = Record<FontSize, string>;

type FontWeight = "normal" | "medium" | "semibold" | "bold";

type FontWeightType = Record<FontWeight, number>;

export type TypographyType = {
  fontFamilies: FontFamilyType;
  fontSizes: FontSizeType;
  fontWeights: FontWeightType;
};

export const typography: TypographyType = {
  fontFamilies: {
    heading: `Arial, "Segoe UI"`,
    body: `Arial, "Segoe UI"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },

  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  //lineHeights
  //letterSpacings
};
