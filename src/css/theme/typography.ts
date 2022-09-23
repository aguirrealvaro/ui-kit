type FontFamilyType = {
  heading: string;
  body: string;
  mono: string;
};

type FontSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

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
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    xxl: "2rem", // 32px
    xxxl: "2.5rem", //40px
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
