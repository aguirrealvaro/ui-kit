import { FunctionComponent } from "react";
import styled from "styled-components";
import { Logo, MainMenu, DropdownMenu, Burger, MobileMenu } from "./components";
import { NavbarItem } from "./Navbar.types";
import { useDisclosure, useDisableScroll, useTheme } from "@/hooks";

type NavbarProps = {
  user: string;
  mainItems: NavbarItem[];
  dropdownItems: NavbarItem[];
};

export const Navbar: FunctionComponent<NavbarProps> = ({ user, mainItems, dropdownItems }) => {
  const { theme } = useTheme();
  const transitionTime = theme.transitions.durations.normal;

  const {
    isOpen: isMobileMenuOpen,
    onToggle,
    onClose,
    isUnmounting,
  } = useDisclosure({ timeout: transitionTime, closeOnResize: true });

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
              transitionTime={transitionTime}
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
  height: ${({ theme }) => theme.sizes[20]};
  background-color: ${({ theme }) => theme.assets.bgPrimary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
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
