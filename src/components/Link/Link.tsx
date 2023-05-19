import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import styled, { css } from "styled-components";
import { LinkUnderlineType } from "./Link.types";

export type LinkProps = {
  children: ReactNode;
  underline?: LinkUnderlineType;
  disabled?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, underline = true, disabled = false, ...restProps }, ref) => {
    return (
      <Anchor
        ref={ref}
        $underline={underline}
        target="_blank"
        $disabled={disabled}
        {...restProps}
      >
        {children}
      </Anchor>
    );
  }
);

const Anchor = styled.a<{ $underline: LinkUnderlineType; $disabled: boolean }>`
  ${({ $underline }) => {
    if ($underline === "hover") {
      return css`
        text-decoration: auto;
        &:hover {
          text-decoration: underline;
        }
      `;
    } else {
      if ($underline) {
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
  ${({ $disabled, theme }) => {
    if ($disabled) {
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
