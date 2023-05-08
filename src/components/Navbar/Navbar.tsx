import { FunctionComponent, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Burger, MobileMenu } from "./components";
import { Wrapper, theme } from "@/css";
import { useDisclosure } from "@/hooks";

type NavbarProps = {
  id: string;
};

export const Navbar: FunctionComponent<NavbarProps> = ({ id }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState<number | undefined>(0);

  const transitionTime = theme.transitions.durations.normal;

  const {
    isOpen: isMobileMenuOpen,
    onToggle: toggleMobileMenu,
    isUnmounting,
  } = useDisclosure({ timeout: transitionTime, closeOnResize: true });

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    setNavbarHeight(containerRef.current?.offsetHeight);
  }, []);

  const burgerId = `${id}-burger`;
  const mobileMenuId = `${id}-mobile-menu`;

  return (
    <Container ref={containerRef}>
      <Wrapper>
        <InnerContainer>
          <Content>
            <DesktopElementContainer>Desktop menu</DesktopElementContainer>
          </Content>
          <Burger
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            id={burgerId}
            aria-expanded={isMobileMenuOpen}
            aria-haspopup="menu"
            aria-controls={mobileMenuId}
          />
          {isMobileMenuOpen && (
            <MobileMenu
              navbarHeight={navbarHeight}
              isMobileMenuOpen={isMobileMenuOpen}
              transitionTime={transitionTime}
              isUnmounting={isUnmounting}
              id={mobileMenuId}
              role="menu"
              aria-labelledby={burgerId}
            />
          )}
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.sizes[20]};
  background-color: ${({ theme }) => theme.assets.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const DesktopElementContainer = styled.div`
  ${({ theme }) => theme.breakpoint("sm")} {
    display: none;
  }
`;
