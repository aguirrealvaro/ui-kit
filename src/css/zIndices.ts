type ZIndex = "hide" | "auto" | "base" | "dropdown" | "modal" | "popover" | "toast";

export type ZIndexType = Record<ZIndex, string | number>;

export const zIndices: ZIndexType = {
  hide: -1,
  auto: "auto",
  base: 0,
  dropdown: 1000,
  modal: 1400,
  popover: 1500,
  toast: 1700,
};
