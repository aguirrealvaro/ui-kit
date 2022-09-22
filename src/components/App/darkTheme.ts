type Size = "xs" | "sm" | "md" | "lg";

type WidthPx = `${number}px`;

type Colors = "black" | "white" | "blue" | "red" | "green" | "yellow" | "grey" | "lightGrey";

type Pallets =
  | "grey"
  | "red"
  | "vulcano"
  | "orange"
  | "gold"
  | "yellow"
  | "lime"
  | "green"
  | "cyan"
  | "blue"
  | "geekblue"
  | "purple"
  | "pink";

type Variants = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type ThemeType = {
  fontFamily: string;
  breakpoint: (size: Size) => string;
  colors: Record<Colors, string>;
  palette: Record<Pallets, Record<"base" | Variants, string>>;
};

const sizes: Record<Size, WidthPx> = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1280px",
};

export const theme: ThemeType = {
  fontFamily: "Arial",
  breakpoint: (size) => `@media (max-width: ${sizes[size]})`,
  colors: {
    black: "#000000",
    white: "#ffffff",
    blue: "#0072FF",
    red: "#FF4658",
    green: "#05944F",
    yellow: "#FFC043",
    grey: "#626262",
    lightGrey: "#d3d3d3",
  },
  palette: {
    grey: {
      base: "rgba(0, 0, 0, 0.36)",
      1: "rgba(0, 0, 0, 0.04)",
      2: "rgba(0, 0, 0, 0.06)",
      3: "rgba(0, 0, 0, 0.08)",
      4: "rgba(0, 0, 0, 0.16)",
      5: "rgba(0, 0, 0, 0.24)",
      6: "rgba(0, 0, 0, 0.36)",
      7: "rgba(0, 0, 0, 0.48)",
      8: "rgba(0, 0, 0, 0.64)",
      9: "rgba(0, 0, 0, 0.80)",
      10: "rgba(0, 0, 0, 0.92)",
    },
    red: {
      base: "#d32029",
      1: "#2a1215",
      2: "#431418",
      3: "#58181c",
      4: "#791a1f",
      5: "#a61d24",
      6: "#d32029",
      7: "#e84749",
      8: "#f37370",
      9: "#f89f9a",
      10: "#fac8c3",
    },
    vulcano: {
      base: "#d84a1b",
      1: "#2b1611",
      2: "#441d12",
      3: "#592716",
      4: "#7c3118",
      5: "#aa3e19",
      6: "#d84a1b",
      7: "#e87040",
      8: "#f3956a",
      9: "#f8b692",
      10: "#fad4bc",
    },
    orange: {
      base: "#d87a16",
      1: "#2b1d11",
      2: "#442a11",
      3: "#593815",
      4: "#7c4a15",
      5: "#aa6215",
      6: "#d87a16",
      7: "#e89a3c",
      8: "#f3b765",
      9: "#f8cf8d",
      10: "#fae3b7",
    },
    gold: {
      base: "#d89614",
      1: "#2b2111",
      2: "#443111",
      3: "#594214",
      4: "#7c5914",
      5: "#aa7714",
      6: "#d89614",
      7: "#e8b339",
      8: "#f3cc62",
      9: "#f8df8b",
      10: "#faedb5",
    },
    yellow: {
      base: "#d8bd14",
      1: "#2b2611",
      2: "#443b11",
      3: "#595014",
      4: "#7c6e14",
      5: "#aa9514",
      6: "#d8bd14",
      7: "#e8d639",
      8: "#f3ea62",
      9: "#f8f48b",
      10: "#fafab5",
    },
    lime: {
      base: "#8bbb11",
      1: "#1f2611",
      2: "#2e3c10",
      3: "#3e4f13",
      4: "#536d13",
      5: "#6f9412",
      6: "#8bbb11",
      7: "#a9d134",
      8: "#c9e75d",
      9: "#e4f88b",
      10: "#f0fab5",
    },
    green: {
      base: "#49aa19",
      1: "#162312",
      2: "#1d3712",
      3: "#274916",
      4: "#306317",
      5: "#3c8618",
      6: "#49aa19",
      7: "#6abe39",
      8: "#8fd460",
      9: "#b2e58b",
      10: "#d5f2bb",
    },
    cyan: {
      base: "#13a8a8",
      1: "#112123",
      2: "#113536",
      3: "#144848",
      4: "#146262",
      5: "#138585",
      6: "#13a8a8",
      7: "#33bcb7",
      8: "#58d1c9",
      9: "#84e2d8",
      10: "#b2f1e8",
    },
    blue: {
      base: "#177ddc",
      1: "#111d2c",
      2: "#112a45",
      3: "#15395b",
      4: "#164c7e",
      5: "#1765ad",
      6: "#177ddc",
      7: "#3c9ae8",
      8: "#65b7f3",
      9: "#8dcff8",
      10: "#b7e3fa",
    },
    geekblue: {
      base: "#2b4acb",
      1: "#131629",
      2: "#161d40",
      3: "#1c2755",
      4: "#203175",
      5: "#263ea0",
      6: "#2b4acb",
      7: "#5273e0",
      8: "#7f9ef3",
      9: "#a8c1f8",
      10: "#d2e0fa",
    },
    purple: {
      base: "#642ab5",
      1: "#1a1325",
      2: "#24163a",
      3: "#301c4d",
      4: "#3e2069",
      5: "#51258f",
      6: "#642ab5",
      7: "#854eca",
      8: "#ab7ae0",
      9: "#cda8f0",
      10: "#ebd7fa",
    },
    pink: {
      base: "#cb2b83",
      1: "#291321",
      2: "#40162f",
      3: "#551c3b",
      4: "#75204f",
      5: "#a02669",
      6: "#cb2b83",
      7: "#e0529c",
      8: "#f37fb7",
      9: "#f8a8cc",
      10: "#fad2e3",
    },
  },
};
