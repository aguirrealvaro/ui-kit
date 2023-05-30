import {
  FunctionComponent,
  ReactNode,
  isValidElement,
  cloneElement,
  ReactElement,
} from "react";
import { theme } from "@/css";
import {
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
} from "@/css/theme/typography";

type StyledTypographyProps = {
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  color?: string;
  children: ReactNode;
};

const StyledTypography: FunctionComponent<StyledTypographyProps> = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  color,
}) => {
  const family = fontFamily && theme.typography.fontFamilies[fontFamily];
  const size = fontSize && theme.typography.fontSizes[fontSize];
  const weight = fontWeight && theme.typography.fontWeights[fontWeight];
  const height = lineHeight && theme.typography.lineHeights[lineHeight];
  const spacing = letterSpacing && theme.typography.letterSpacings[letterSpacing];

  const child = (() => {
    if (!isValidElement(children)) return null;
    return cloneElement(children as ReactElement, {
      style: {
        fontFamily: family,
        fontSize: size,
        fontWeight: weight,
        lineHeight: height,
        letterSpacing: spacing,
        color,
      },
    });
  })();

  return <>{child}</>;
};

export { StyledTypography, type StyledTypographyProps };
