import { FunctionComponent, ReactNode } from "react";
import { styled } from "styled-components";

type DropdownMenuTitleProps = {
  children: ReactNode;
};

export const DropdownMenuTitle: FunctionComponent<DropdownMenuTitleProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

const Title = styled.span`
  display: block;
  color: ${({ theme }) => theme.vars.textSecondary};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  padding: ${({ theme }) => theme.spacing[1.5]} ${({ theme }) => theme.spacing[2]};
`;
