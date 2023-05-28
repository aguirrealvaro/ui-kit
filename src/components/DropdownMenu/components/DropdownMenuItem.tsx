import { ReactNode, forwardRef } from "react";
import styled from "styled-components";

type DropdownMenuItemProps = {
  children: ReactNode;
};

export const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ children }, ref) => {
    return (
      <Container role="menuitem" tabIndex={0} ref={ref}>
        {children}
      </Container>
    );
  }
);

const Container = styled.div`
  cursor: default;
  padding: ${({ theme }) => theme.spacing[1.5]} ${({ theme }) => theme.spacing[2]};
  &:hover {
    background-color: ${({ theme }) => theme.vars.hover};
  }
`;
