import { FunctionComponent } from "react";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import styled from "styled-components";
import { NavbarItem } from "../types";
import { Dropdown, StyledIcon } from "@/components";

type MainMenuProps = { user: string; items: NavbarItem[] };

export const DropdownMenu: FunctionComponent<MainMenuProps> = ({ user, items }) => {
  const dropdownContent = (
    <DropdownContent>
      {items
        .filter(({ show = true }) => show)
        .map(({ label, onClick, disabled = false }, i) => (
          <Item key={i} onClick={onClick} disabled={disabled}>
            {label}
          </Item>
        ))}
    </DropdownContent>
  );

  return (
    <Container>
      <Dropdown content={dropdownContent} placement="right">
        <Profile>
          <StyledIcon icon={UserCircle} size="20px" />
          <span>{user}</span>
          <StyledIcon icon={ChevronDown} size="23px" />
        </Profile>
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.breakpoint("lg")} {
    display: none;
  }
`;

const Profile = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DropdownContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 9px;
  padding: 1.2rem;
`;

const Item = styled.button`
  display: block;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0rem;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
