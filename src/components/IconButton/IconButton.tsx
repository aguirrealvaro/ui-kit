import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { IconButtonSizeType } from "./IconButton.types";
import { Spacing } from "@/css/theme/spacing";

type IconButtonProps = {
  children: ReactNode;
  size?: IconButtonSizeType;
};

export const IconButton: FunctionComponent<
  IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, size = "md", ...props }) => {
  return (
    <Container type="button" size={size} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.button<{ size: IconButtonSizeType }>`
  line-height: 0;
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
    background-color: ${({ theme }) => theme.assets.hover};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
