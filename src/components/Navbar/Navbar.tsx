import { FunctionComponent, useId, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Burger, MobileMenu } from "./components";
import { Wrapper, theme } from "@/css";
import { useDisclosure } from "@/hooks";

const Navbar: FunctionComponent = () => {
  const id = useId();

  const containerRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState<number | undefined>(0);

  const transitionTime = theme.transitions.durations.normal;

  const {
    isOpen: isMobileMenuOpen,
    onToggle: toggleMobileMenu,
    onClose: closeMobileMenu,
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
            <span>LOGO</span>
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
              closeMobileMenu={closeMobileMenu}
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

export { Navbar };

const Container = styled.header`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spacing[20]};
  background-color: ${({ theme }) => theme.tokens.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DesktopElementContainer = styled.div`
  ${({ theme }) => theme.breakpoint("sm")} {
    display: none;
  }
`;
