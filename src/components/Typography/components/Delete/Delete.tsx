import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";
import { DeleteVariantType } from "./Delete.types";

type DeleteProps = {
  children: ReactNode;
  variant?: DeleteVariantType;
} & StyledTypographyProps;

const Delete: FunctionComponent<DeleteProps> = ({
  children,
  variant = "primary",
  ...styledProps
}) => {
  return (
    <StyledTypography {...styledProps}>
      <CustomUnderline $variant={variant}>{children}</CustomUnderline>
    </StyledTypography>
  );
};

const CustomUnderline = styled.del<{ $variant: DeleteVariantType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-size: ${({ theme }) => theme.typography.fontSizes["md"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.vars.textPrimary : theme.vars.textSecondary};
`;

export { Delete, type DeleteProps };
