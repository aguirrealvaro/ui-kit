import { FunctionComponent, useRef } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import styled, { css, keyframes } from "styled-components";
import { NavbarItem } from "../Navbar.types";
import { Icon, IconButton } from "@/components";
import { useOutsideClick, useTheme } from "@/hooks";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  onClose: () => void;
  isUnmounting: boolean;
  items: NavbarItem[];
  transitionTime: number;
};

export const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  isMobileMenuOpen,
  onClose,
  isUnmounting,
  items,
  transitionTime,
}) => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick({ ref, handler: onClose, enabled: isMobileMenuOpen });

  return (
    <Backdrop isUnmounting={isUnmounting}>
      <Container isUnmounting={isUnmounting} ref={ref} transitionTime={transitionTime}>
        <CloseButtonWrapper>
          <IconButton onClick={onClose}>
            <Icon icon={CloseOutline} color={theme.colors.grey.base} size={25} />
          </IconButton>
        </CloseButtonWrapper>
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
  background-color: ${({ theme }) => theme.transparencies.medium};
  animation: ${fadeIn} ${({ theme }) => theme.transitions.normal}ms ease-out;
  transition: all 200ms linear;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  ${({ isUnmounting }) =>
    isUnmounting &&
    css`
      opacity: 0;
      transition: opacity ${({ theme }) => theme.transitions.normal}ms ease-out;
    `}
`;

const Container = styled.div<{ isUnmounting: boolean; transitionTime: number }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.grey[1]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  animation: ${translate} ${({ transitionTime }) => transitionTime}ms ease-out;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ isUnmounting, transitionTime }) =>
    isUnmounting &&
    css`
      transform: translateX(100%);
      transition: transform ${transitionTime}ms ease-out;
    `}
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2.1rem;
`;

const Item = styled.button`
  display: block;
  margin: 0 auto 2rem;
  &:last-child {
    margin-bottom: 0rem;
  }
  &:disabled {
    color: ${({ theme }) => theme.assets["disabled"]};
    cursor: not-allowed;
  }
`;
