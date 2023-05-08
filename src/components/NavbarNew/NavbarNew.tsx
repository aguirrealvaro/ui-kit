import { FunctionComponent, ReactNode } from "react";
import { Menu } from "lucide-react";
import styled from "styled-components";
import { Icon, IconButton } from "@/components";
import { Wrapper, theme } from "@/css";
import { useDisclosure } from "@/hooks";

type NavbarNewProps = {
  children: ReactNode;
};

export const NavbarNew: FunctionComponent<NavbarNewProps> = ({ children }) => {
  const transitionTime = theme.transitions.durations.normal;

  const {
    isOpen: isMobileMenuOpen,
    onToggle: toggleMobileMenu,
    onClose: closeMobileMenu,
    isUnmounting,
  } = useDisclosure({ timeout: transitionTime, closeOnResize: true });

  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <div>{children}</div>
          <IconButton onClick={toggleMobileMenu}>
            <Icon icon={Menu} size={24} />
          </IconButton>
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
