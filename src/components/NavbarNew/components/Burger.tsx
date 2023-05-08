import { FunctionComponent, ButtonHTMLAttributes } from "react";
import { Menu, X } from "lucide-react";
import styled from "styled-components";
import { Icon, IconButton } from "@/components/";

type BurgerProps = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Burger: FunctionComponent<BurgerProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  ...restProps
}) => {
  const icon = isMobileMenuOpen ? X : Menu;

  return (
    <Container>
      <IconButton onClick={toggleMobileMenu} {...restProps}>
        <Icon icon={icon} size={24} />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoint("sm")} {
    display: block;
  }
`;
