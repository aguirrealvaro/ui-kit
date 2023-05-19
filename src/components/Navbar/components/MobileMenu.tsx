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

const Container = styled.div<{
  $navbarHeight: number | undefined;
  $transitionTime: number;
  $isUnmounting: boolean;
}>`
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
  animation: ${fadeIn} ${({ $transitionTime }) => $transitionTime}ms
    ${({ theme }) => theme.transitions.timings.in};
  ${({ $isUnmounting, $transitionTime, theme }) =>
    $isUnmounting &&
    css`
      opacity: 0;
      transition: opacity ${$transitionTime}ms ${theme.transitions.timings.in};
    `};
  display: flex;
  align-items: center;
  justify-content: center;
`;
