type FontFamilyType = {
  heading: string;
  body: string;
  mono: string;
};

export type FontSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

type FontSizeType = Record<FontSize, string>;

export type FontWeight = "normal" | "medium" | "semibold" | "bold";

type FontWeightType = Record<FontWeight, number>;

type LetterSpacing = "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";

type LetterSpacingType = Record<LetterSpacing, string>;

type LineHeight =
  | "normal"
  | "none"
  | "shorter"
  | "short"
  | "base"
  | "tall"
  | "taller"
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10;

type LineHeightType = Record<LineHeight, string>;

export type TypographyType = {
  fontFamilies: FontFamilyType;
  fontSizes: FontSizeType;
  fontWeights: FontWeightType;
  lineHeights: LineHeightType;
  letterSpacings: LetterSpacingType;
};

export const typography: TypographyType = {
  fontFamilies: {
    heading: `Arial, "Segoe UI"`,
    body: `Arial, "Segoe UI"`,
    mono: `monospace`,
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "2rem", // 32px
    "4xl": "2.5rem", //40px
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05rem",
    tight: "-0.025rem",
    normal: "0",
    wide: "0.025rem",
    wider: "0.05rem",
    widest: "0.1rem",
  },
};
