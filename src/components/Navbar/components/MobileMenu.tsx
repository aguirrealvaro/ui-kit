import { FunctionComponent, useRef } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import styled, { css, keyframes } from "styled-components";
import { NavbarItem } from "../Navbar.types";
import { Icon, IconButton } from "@/components";
import { useOutsideClick } from "@/hooks";

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
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick({ ref, handler: onClose, enabled: isMobileMenuOpen });

  return (
    <Backdrop isUnmounting={isUnmounting}>
      <Container isUnmounting={isUnmounting} ref={ref} transitionTime={transitionTime}>
        <CloseButtonWrapper>
          <IconButton onClick={onClose}>
            <Icon icon={CloseOutline} size={25} />
          </IconButton>
        </CloseButtonWrapper>
        <InnerContainer>
          {items
            .filter(({ show = true }) => show)
            .map(({ label, onClick, disabled = false }, i) => (
              <Item key={i} onClick={onClick} disabled={disabled}>
                {label}
              </Item>
            ))}
        </InnerContainer>
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
  animation: ${fadeIn} ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.in};
  transition: all 200ms ${({ theme }) => theme.transitions.timings.in};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  ${({ isUnmounting }) =>
    isUnmounting &&
    css`
      opacity: 0;
      transition: opacity ${({ theme }) => theme.transitions.durations.normal}ms
        ${({ theme }) => theme.transitions.timings.in};
    `}
`;

const Container = styled.div<{ isUnmounting: boolean; transitionTime: number }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  background-color: ${({ theme }) => theme.assets.bgPrimary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  animation: ${translate} ${({ transitionTime }) => transitionTime}ms
    ${({ theme }) => theme.transitions.timings.in};
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ isUnmounting, transitionTime }) =>
    isUnmounting &&
    css`
      transform: translateX(100%);
      transition: transform ${transitionTime}ms ${({ theme }) => theme.transitions.timings.in};
    `}
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.sizes[6]};
  right: ${({ theme }) => theme.sizes[8]};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const Item = styled.button`
  display: block;
  margin: 0 auto;
  &:disabled {
    color: ${({ theme }) => theme.assets.disabledBg};
    cursor: not-allowed;
  }
`;
