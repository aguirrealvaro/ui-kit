import { BreakpointSize } from "@/css/theme/breakpoints";
import { FontSize } from "@/css/theme/typography";
import { AtLeastOne } from "@/types";

export type TextType = "span" | "strong" | "i" | "u" | "del" | "mark" | "code" | "kbd";

export type TextSizeType = FontSize | AtLeastOne<Record<BreakpointSize, string>>;
