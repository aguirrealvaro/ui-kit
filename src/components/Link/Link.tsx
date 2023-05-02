import { FunctionComponent, AnchorHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

export type LinkProps = {
  children: ReactNode;
  hideUnderline?: boolean;
  disabled?: boolean;
};

export const Link: FunctionComponent<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  hideUnderline = false,
  disabled = false,
  ...restProps
}) => {
  return (
    <Anchor hideUnderline={hideUnderline} target="_blank" disabled={disabled} {...restProps}>
      {children}
    </Anchor>
  );
};

const Anchor = styled.a<{ hideUnderline: boolean; disabled: boolean }>`
  text-decoration: ${({ hideUnderline }) => hideUnderline && "auto"};
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        color: ${theme.assets.disabledPrimary};
        cursor: not-allowed;
      `;
    } else {
      return css`
        cursor: pointer;
        color: ${theme.assets.primary};
      `;
    }
  }}
`;
