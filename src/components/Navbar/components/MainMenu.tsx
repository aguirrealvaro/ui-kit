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
  ${({ theme }) => theme.breakpoint("lg")} {
    display: none;
  }
`;

const Item = styled.button`
  margin-right: 2rem;
  &:last-child {
    margin-right: 0rem;
  }
  &:disabled {
    color: ${({ theme }) => theme.assets["disabled"]};
    cursor: not-allowed;
  }
`;
