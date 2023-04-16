import {
  FunctionComponent,
  ReactNode,
  isValidElement,
  cloneElement,
  ReactElement,
} from "react";
import {
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
} from "@/css/theme/typography";
import { useTheme } from "@/hooks";

export type StyledTypographyProps = {
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  children: ReactNode;
};

export const StyledTypography: FunctionComponent<StyledTypographyProps> = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
}) => {
  const { theme } = useTheme();

  const family = fontFamily && theme.typography.fontFamilies[fontFamily];
  const size = fontSize && theme.typography.fontSizes[fontSize];
  const weight = fontWeight && theme.typography.fontWeights[fontWeight];

  const child = (() => {
    if (!isValidElement(children)) return null;
    return cloneElement(children as ReactElement, {
      style: { fontFamily: family, fontSize: size, fontWeight: weight },
    });
  })();

  return <>{child}</>;
};
