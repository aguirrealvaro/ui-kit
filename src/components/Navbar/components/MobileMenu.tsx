import { FunctionComponent, HTMLAttributes } from "react";
import styled, { css, keyframes } from "styled-components";
import { useKeyPress } from "@/hooks";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  navbarHeight: number | undefined;
  closeMobileMenu: () => void;
  transitionTime: number;
  isUnmounting: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  isMobileMenuOpen,
  navbarHeight,
  closeMobileMenu,
  transitionTime,
  isUnmounting,
  ...restProps
}) => {
  useKeyPress({
    targetKey: "Escape",
    handler: closeMobileMenu,
    enabled: isMobileMenuOpen,
  });

  return (
    <Container
      $navbarHeight={navbarHeight}
      $transitionTime={transitionTime}
      $isUnmounting={isUnmounting}
      {...restProps}
    >
      Mobile element
    </Container>
  );
};

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const fadeOut = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

const Container = styled.div<{
  $navbarHeight: number | undefined;
  $transitionTime: number;
  $isUnmounting: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.selectDropdown};
  background-color: ${({ theme }) => theme.colors.white};
  top: ${({ $navbarHeight }) => {
    if ($navbarHeight) {
      return `${$navbarHeight}px`;
    }
  }};
  right: 0;
  left: 0;
  bottom: 0;

  animation-name: ${fadeIn};
  animation-duration: ${({ $transitionTime }) => `${$transitionTime}ms`};
  animation-timing-function: ${({ theme }) => theme.transitions.timings.in};
  animation-fill-mode: forwards;

  ${({ $isUnmounting, theme, $transitionTime }) => {
    if ($isUnmounting) {
      return css`
        animation-name: ${fadeOut};
        animation-duration: ${$transitionTime}ms;
        animation-timing-function: ${theme.transitions.timings.in};
        animation-fill-mode: forwards;
      `;
    }
  }};
`;
