import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import styled from "styled-components";
import { IconButtonSizeType } from "./IconButton.types";
import { Spacing } from "@/css/theme/spacing";

type IconButtonProps = {
  children: ReactNode;
  size?: IconButtonSizeType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, size = "md", ...props }, ref) => {
    return (
      <Container ref={ref} type="button" size={size} {...props}>
        {children}
      </Container>
    );
  }
);

const Container = styled.button<{ size: IconButtonSizeType }>`
  display: flex;
  padding: ${({ theme, size }) => {
    const sizes: Record<IconButtonSizeType, Spacing> = {
      xs: 0.5,
      sm: 1,
      md: 1.5,
      lg: 2,
    };

    return theme.spacing[sizes[size]];
  }};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: background-color ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.vars.hover};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
