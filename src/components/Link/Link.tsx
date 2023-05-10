import { FunctionComponent, AnchorHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { LinkUnderlineType } from "./Link.types";

export type LinkProps = {
  children: ReactNode;
  underline?: LinkUnderlineType;
  disabled?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: FunctionComponent<LinkProps> = ({
  children,
  underline = true,
  disabled = false,
  ...restProps
}) => {
  return (
    <Anchor underline={underline} target="_blank" disabled={disabled} {...restProps}>
      {children}
    </Anchor>
  );
};

const Anchor = styled.a<{ underline: LinkUnderlineType; disabled: boolean }>`
  ${({ underline }) => {
    if (underline === "hover") {
      return css`
        text-decoration: auto;
        &:hover {
          text-decoration: underline;
        }
      `;
    } else {
      if (underline) {
        return css`
          text-decoration: underline;
        `;
      } else {
        return css`
          text-decoration: auto;
        `;
      }
    }
  }};
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        color: ${theme.vars.disabledPrimary};
        cursor: not-allowed;
      `;
    } else {
      return css`
        cursor: pointer;
        color: ${theme.colors.blue.default};
      `;
    }
  }}
`;
