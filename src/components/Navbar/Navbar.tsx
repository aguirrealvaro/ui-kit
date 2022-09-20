import { FunctionComponent } from "react";
import styled from "styled-components";
import { Logo, MainMenu, DropdownMenu, Burger, MobileMenu } from "./components";
import { ANIMATION_TIME } from "./Navbar.constants";
import { NavbarItem } from "./Navbar.types";
import { useDisclosure, useDisableScroll } from "@/hooks";

type NavbarProps = {
  user: string;
  mainItems: NavbarItem[];
  dropdownItems: NavbarItem[];
};

export const Navbar: FunctionComponent<NavbarProps> = ({ user, mainItems, dropdownItems }) => {
  const {
    isOpen: isMobileMenuOpen,
    onToggle,
    onClose,
    isUnmounting,
  } = useDisclosure({ timeout: ANIMATION_TIME, closeOnResize: true });

  useDisableScroll(isMobileMenuOpen);

  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <Logo />
          <MainMenu items={mainItems} />
          <DropdownMenu user={user} items={dropdownItems} />
          <Burger onClick={onToggle} />
          {isMobileMenuOpen && (
            <MobileMenu
              isMobileMenuOpen={isMobileMenuOpen}
              onClose={onClose}
              isUnmounting={isUnmounting}
              items={mainItems.concat(dropdownItems)}
            />
          )}
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
