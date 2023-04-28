type Colors = "grey" | "red" | "yellow" | "green" | "blue";

type Variants = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type CollorsType = Record<Colors, Record<Variants, string>> & {
  black: string;
  white: string;
};

export const colors: CollorsType = {
  white: "#ffffff",
  black: "#000000",
  grey: {
    1: "#F7F7F7",
    2: "#F3F4F6",
    3: "#E5E7EB",
    4: "#D1D5DB",
    5: "#9CA3AF",
    6: "#6B7280",
    7: "#4B5563",
    8: "#3a3d4a",
    9: "#2e3039",
    10: "#1f2028",
  },
  red: {
    1: "#FDF2F2",
    2: "#FDE8E8",
    3: "#FBD5D5",
    4: "#F8B4B4",
    5: "#F98080",
    6: "#F05252",
    7: "#E02424",
    8: "#C81E1E",
    9: "#9B1C1C",
    10: "#771D1D",
  },
  yellow: {
    1: "#FDFDEA",
    2: "#FDF6B2",
    3: "#FCE96A",
    4: "#FACA15",
    5: "#E3A008",
    6: "#C27803",
    7: "#9F580A",
    8: "#8E4B10",
    9: "#723B13",
    10: "#633112",
  },
  green: {
    1: "#F3FAF7",
    2: "#DEF7EC",
    3: "#BCF0DA",
    4: "#84E1BC",
    5: "#31C48D",
    6: "#0E9F6E",
    7: "#057A55",
    8: "#046C4E",
    9: "#03543F",
    10: "#014737",
  },
  blue: {
    1: "#f0fbff",
    2: "#d9f3ff",
    3: "#b0e3ff",
    4: "#87d1ff",
    5: "#5ebcff",
    6: "#36a3ff",
    7: "#2381d9",
    8: "#1460b3",
    9: "#08448c",
    10: "#052d66",
  },
};
