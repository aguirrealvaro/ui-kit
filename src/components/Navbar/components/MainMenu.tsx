import { FunctionComponent } from "react";
import styled from "styled-components";
import { NavbarItem } from "../Navbar.types";

type MainMenuProps = { items: NavbarItem[] };

export const MainMenu: FunctionComponent<MainMenuProps> = ({ items }) => (
  <Container>
    {items
      .filter(({ show = true }) => show)
      .map(({ label, onClick, disabled = false }, i) => (
        <Item key={i} onClick={onClick} disabled={disabled}>
          {label}
        </Item>
      ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  ${({ theme }) => theme.breakpoint("lg")} {
    display: none;
  }
`;

const Item = styled.button`
  &:disabled {
    color: ${({ theme }) => theme.assets.disabledBg};
    cursor: not-allowed;
  }
`;
