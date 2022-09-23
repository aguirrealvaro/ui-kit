type ZIndex = "hide" | "auto" | "base" | "dropdown" | "modal" | "popover" | "toast";

export type ZIndexType = Record<ZIndex, string | number>;

export const zIndices: ZIndexType = {
  hide: -1,
  auto: "auto",
  base: 0,
  dropdown: 1,
  modal: 2,
  popover: 3,
  toast: 4,
};
