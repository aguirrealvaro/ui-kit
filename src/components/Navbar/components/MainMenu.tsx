import { FunctionComponent } from "react";
import styled from "styled-components";
import { NavbarItem } from "../Navbar.types";

type MainMenuProps = { items: NavbarItem[] };

export const MainMenu: FunctionComponent<MainMenuProps> = ({ items }) => (
  <Container>
    <UnorderedList role="menubar">
      {items
        .filter(({ show = true }) => show)
        .map(({ label, onClick, disabled = false }, i) => (
          <li key={i} role="none">
            <Item onClick={onClick} disabled={disabled} role="menuitem">
              {label}
            </Item>
          </li>
        ))}
    </UnorderedList>
  </Container>
);

const Container = styled.nav`
  ${({ theme }) => theme.breakpoint("md")} {
    display: none;
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: center;
  list-style: none;
`;

const Item = styled.button`
  &:disabled {
    color: ${({ theme }) => theme.assets.disabledBg};
    cursor: not-allowed;
  }
`;
