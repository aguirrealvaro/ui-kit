import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { MainMenu, Burger, MobileMenu } from "./components";
import { NavbarItem } from "./Navbar.types";
import { theme } from "@/css";
import { useDisclosure, useDisableScroll } from "@/hooks";

type NavbarProps = {
  startElement?: ReactNode;
  endElement?: ReactNode;
  mainItems: NavbarItem[];
  mobileItems: NavbarItem[];
};

export const Navbar: FunctionComponent<NavbarProps> = ({
  startElement,
  endElement,
  mainItems,
  mobileItems,
}) => {
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
          {startElement}
          <MainMenu items={mainItems} />
          <EndElementContainer>{endElement}</EndElementContainer>
          <Burger onClick={onToggle} />
          {isMobileMenuOpen && (
            <MobileMenu
              isMobileMenuOpen={isMobileMenuOpen}
              onClose={onClose}
              isUnmounting={isUnmounting}
              items={mainItems.concat(mobileItems)}
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

const EndElementContainer = styled.div`
  ${({ theme }) => theme.breakpoint("md")} {
    display: none;
  }
`;
