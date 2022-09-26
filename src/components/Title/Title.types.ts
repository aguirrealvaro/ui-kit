import { BreakpointSize } from "@/css/theme/breakpoints";
import { FontSize } from "@/css/theme/typography";

export type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TitleSizeType = FontSize | Record<BreakpointSize, string>;
