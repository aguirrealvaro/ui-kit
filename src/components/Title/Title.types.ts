import { BreakpointSize } from "@/css/theme/breakpoints";
import { FontSize } from "@/css/theme/typography";

export type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export type TitleSizeType = FontSize | AtLeastOne<Record<BreakpointSize, string>>;
