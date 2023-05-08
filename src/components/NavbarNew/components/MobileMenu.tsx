import { FunctionComponent } from "react";
import styled, { css, keyframes } from "styled-components";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  navbarHeight: number | undefined;
  transitionTime: number;
  isUnmounting: boolean;
};

export const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  isMobileMenuOpen,
  navbarHeight,
  transitionTime,
  isUnmounting,
}) => {
  return (
    <Container
      isMobileMenuOpen={isMobileMenuOpen}
      navbarHeight={navbarHeight}
      transitionTime={transitionTime}
      isUnmounting={isUnmounting}
    >
      MobileMenu
    </Container>
  );
};

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const Container = styled.div<MobileMenuProps>`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices.selectDropdown};
  background-color: ${({ theme }) => theme.colors.red[800]};
  top: ${({ navbarHeight }) => {
    if (navbarHeight) {
      return `${navbarHeight}px`;
    }
  }};
  right: 0;
  left: 0;
  bottom: 0;
  animation: ${fadeIn} ${({ transitionTime }) => transitionTime}ms
    ${({ theme }) => theme.transitions.timings.in};
  ${({ isUnmounting, transitionTime, theme }) =>
    isUnmounting &&
    css`
      opacity: 0;
      transition: opacity ${transitionTime}ms ${theme.transitions.timings.in};
    `}
`;
