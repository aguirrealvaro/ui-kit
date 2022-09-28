import { AssetsType, CollorsType } from "./types";

export const lightColors: CollorsType = {
  grey: {
    base: "#6B7280",
    1: "#F9FAFB",
    2: "#F3F4F6",
    3: "#E5E7EB",
    4: "#D1D5DB",
    5: "#9CA3AF",
    6: "#6B7280",
    7: "#4B5563",
    8: "#374151",
    9: "#1F2937",
    10: "#111827",
  },
  red: {
    base: "#E02424",
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
  orange: {
    base: "#FF5A1F",
    1: "#FFF8F1",
    2: "#FEECDC",
    3: "#FCD9BD",
    4: "#FDBA8C",
    5: "#FF8A4C",
    6: "#FF5A1F",
    7: "#D03801",
    8: "#B43403",
    9: "#8A2C0D",
    10: "#771D1D",
  },
  yellow: {
    base: "#E3A008",
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
    base: "#0E9F6E",
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
  teal: {
    base: "#0694A2",
    1: "#EDFAFA",
    2: "#D5F5F6",
    3: "#AFECEF",
    4: "#7EDCE2",
    5: "#16BDCA",
    6: "#0694A2",
    7: "#047481",
    8: "#036672",
    9: "#05505C",
    10: "#014451",
  },
  blue: {
    base: "#3F83F8",
    1: "#EBF5FF",
    2: "#E1EFFE",
    3: "#C3DDFD",
    4: "#A4CAFE",
    5: "#76A9FA",
    6: "#3F83F8",
    7: "#1C64F2",
    8: "#1A56DB",
    9: "#1E429F",
    10: "#233876",
  },
  indigo: {
    base: "#6875F5",
    1: "#F0F5FF",
    2: "#E5EDFF",
    3: "#CDDBFE",
    4: "#B4C6FC",
    5: "#8DA2FB",
    6: "#6875F5",
    7: "#5850EC",
    8: "#5145CD",
    9: "#42389D",
    10: "#362F78",
  },
  purple: {
    base: "#9061F9",
    1: "#F6F5FF",
    2: "#EDEBFE",
    3: "#DCD7FE",
    4: "#CABFFD",
    5: "#AC94FA",
    6: "#9061F9",
    7: "#7E3AF2",
    8: "#6C2BD9",
    9: "#5521B5",
    10: "#4A1D96",
  },
  pink: {
    base: "#E74694",
    1: "#FDF2F8",
    2: "#FCE8F3",
    3: "#FAD1E8",
    4: "#F8B4D9",
    5: "#F17EB8",
    6: "#E74694",
    7: "#D61F69",
    8: "#BF125D",
    9: "#99154B",
    10: "#751A3D",
  },
};

export const lightAssets: AssetsType = {
  brand: lightColors.blue.base,
  title: lightColors.grey[10],
  primaryText: lightColors.grey[9],
  secondaryText: lightColors.grey[8],
  disabled: lightColors.grey[4],
  background: lightColors.grey[2],
  "input-border": lightColors.grey[4],
};
