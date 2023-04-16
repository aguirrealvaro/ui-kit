import {
  FunctionComponent,
  ReactNode,
  isValidElement,
  cloneElement,
  ReactElement,
} from "react";

export type StyledTypographyProps = {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  children: ReactNode;
};

export const StyledTypography: FunctionComponent<StyledTypographyProps> = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
}) => {
  const child = (() => {
    if (!isValidElement(children)) return null;
    return cloneElement(children as ReactElement, {
      style: { fontFamily, fontSize, fontWeight },
    });
  })();

  return <>{child}</>;
};
