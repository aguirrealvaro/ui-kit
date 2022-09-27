import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type IconButtonProps = {
  children: ReactNode;
};

export const IconButton: FunctionComponent<
  IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.button`
  line-height: 0;
  padding: 6px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: background-color ${({ theme }) => theme.transitions.normal}ms ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
