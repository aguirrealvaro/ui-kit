export type Spacing =
  | "px"
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type SpacingType = Record<Spacing, string>;

// Mental model: If you need a spacing of 40px, divide it by 4. That'll give you 10. Then use it in your component.

export const spacing: SpacingType = {
  px: "1px",
  0.5: "0.125rem", //2px
  1: "0.25rem", //4px
  1.5: "0.375rem", //6px
  2: "0.5rem", //8px
  2.5: "0.625rem", //10px
  3: "0.75rem", //12px
  3.5: "0.875rem", //14px
  4: "1rem", //16px
  5: "1.25rem", //20px
  6: "1.5rem", //24px
  7: "1.75rem", //28px
  8: "2rem", //32px
  9: "2.25rem", //36px
  10: "2.5rem", //40px
  11: "3rem", //40px
  12: "3.5rem", //40px
};
