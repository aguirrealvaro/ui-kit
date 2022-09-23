import { FunctionComponent, useRef } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import styled, { css, keyframes } from "styled-components";
import { ANIMATION_TIME } from "../Navbar.constants";
import { NavbarItem } from "../Navbar.types";
import { Icon } from "@/components";
import { useOutsideClick, useTheme } from "@/hooks";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  onClose: () => void;
  isUnmounting: boolean;
  items: NavbarItem[];
};

export const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  isMobileMenuOpen,
  onClose,
  isUnmounting,
  items,
}) => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick({ ref, handler: onClose, enabled: isMobileMenuOpen });

  return (
    <Backdrop isUnmounting={isUnmounting}>
      <Container isUnmounting={isUnmounting} ref={ref}>
        <CloseButton onClick={onClose}>
          <Icon icon={CloseOutline} color={theme.colors.grey.base} size={25} />
        </CloseButton>
        <div>
          {items
            .filter(({ show = true }) => show)
            .map(({ label, onClick, disabled = false }, i) => (
              <Item key={i} onClick={onClick} disabled={disabled}>
                {label}
              </Item>
            ))}
        </div>
      </Container>
    </Backdrop>
  );
};

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const translate = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const Backdrop = styled.div<{ isUnmounting: boolean }>`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} ${ANIMATION_TIME}ms ease-out;
  transition: all 200ms linear;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  ${({ isUnmounting }) =>
    isUnmounting &&
    css`
      opacity: 0;
      transition: opacity ${ANIMATION_TIME}ms ease-out;
    `}
`;

const Container = styled.div<{ isUnmounting: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.grey[1]};
  box-shadow: 0px 4px 4px rgba(209, 196, 196, 0.12);
  animation: ${translate} ${ANIMATION_TIME}ms ease-out;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ isUnmounting }) =>
    isUnmounting &&
    css`
      transform: translateX(100%);
      transition: transform ${ANIMATION_TIME}ms ease-out;
    `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 2.1rem;
  line-height: 0px;
  padding: 6px;
`;

const Item = styled.button`
  display: block;
  margin: 0 auto 2rem;
  &:last-child {
    margin-bottom: 0rem;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
