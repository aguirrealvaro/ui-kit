import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import styled, { css } from "styled-components";
import { LinkUnderlineType } from "./Link.types";

type LinkProps = {
  children: ReactNode;
  underline?: LinkUnderlineType;
  disabled?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, underline = true, disabled = false, href, ...restProps }, ref) => {
    return (
      <Anchor
        ref={ref}
        $underline={underline}
        target="_blank"
        rel="noopener noreferrer"
        $disabled={disabled}
        href={disabled ? undefined : href}
        aria-invalid={disabled}
        {...restProps}
      >
        {children}
      </Anchor>
    );
  }
);

export { Link, type LinkProps };

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
        color: ${theme.tokens.disabledPrimary};
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
