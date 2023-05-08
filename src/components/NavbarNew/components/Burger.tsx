import { FunctionComponent } from "react";
import { Menu, X } from "lucide-react";
import styled from "styled-components";
import { Icon, IconButton } from "@/components/";

type BurgerProps = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export const Burger: FunctionComponent<BurgerProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
}) => {
  const icon = isMobileMenuOpen ? X : Menu;

  return (
    <Container>
      <IconButton onClick={toggleMobileMenu}>
        <Icon icon={icon} size={24} />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoint("md")} {
    display: block;
  }
`;
