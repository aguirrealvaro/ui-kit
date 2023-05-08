import { FunctionComponent, useRef } from "react";
import styled from "styled-components";
import { Burger, MobileMenu } from "./components";
import { Wrapper, theme } from "@/css";
import { useDisclosure } from "@/hooks";

export const NavbarNew: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionTime = theme.transitions.durations.normal;

  const {
    isOpen: isMobileMenuOpen,
    onToggle: toggleMobileMenu,
    isUnmounting,
  } = useDisclosure({ timeout: transitionTime, closeOnResize: true });

  const navbarHeight = containerRef.current?.offsetHeight;

  return (
    <Container ref={containerRef}>
      <Wrapper>
        <InnerContainer>
          <Content>
            <DesktopElementContainer>Desktop menu</DesktopElementContainer>
          </Content>
          <Burger isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
          {isMobileMenuOpen && (
            <MobileMenu
              navbarHeight={navbarHeight}
              isMobileMenuOpen={isMobileMenuOpen}
              transitionTime={transitionTime}
              isUnmounting={isUnmounting}
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
  background-color: ${({ theme }) => theme.assets.bgPrimary};
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
  ${({ theme }) => theme.breakpoint("md")} {
    display: none;
  }
`;
