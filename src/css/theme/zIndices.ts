type ZIndex =
  | "hide"
  | "auto"
  | "base"
  | "selectDropdown"
  | "dialog"
  | "popover"
  | "navbarMenu"
  | "toast";

export type ZIndexType = Record<ZIndex, string | number>;

export const zIndices: ZIndexType = {
  hide: -1,
  auto: "auto",
  base: 0,
  selectDropdown: 1,
  dialog: 2,
  popover: 3,
  navbarMenu: 4,
  toast: 5,
};
