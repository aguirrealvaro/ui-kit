import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type IconButtonProps = {
  children: ReactNode;
};

export const IconButton: FunctionComponent<
  IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

const Container = styled.button`
  line-height: 0;
  padding: ${({ theme }) => theme.spacing[1.5]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: background-color ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  &:hover {
    background-color: ${({ theme }) => theme.assets.iconHover};
  }
`;
