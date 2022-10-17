import { FunctionComponent } from "react";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import styled from "styled-components";
import { NavbarItem } from "../Navbar.types";
import { Dropdown, Icon } from "@/components";

type MainMenuProps = { user: string; items: NavbarItem[] };

export const DropdownMenu: FunctionComponent<MainMenuProps> = ({ user, items }) => {
  const dropdownContent = (
    <div>
      {items
        .filter(({ show = true }) => show)
        .map(({ label, onClick, disabled = false }, i) => (
          <Item key={i} onClick={onClick} disabled={disabled}>
            {label}
          </Item>
        ))}
    </div>
  );

  return (
    <Container>
      <Dropdown content={dropdownContent} position="bottom-right">
        <Profile>
          <Icon icon={UserCircle} size={25} />
          <span>{user}</span>
          <Icon icon={ChevronDown} size={23} />
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
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Item = styled.button`
  display: block;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0rem;
  }
  &:disabled {
    color: ${({ theme }) => theme.assets.disabledBg};
    cursor: not-allowed;
  }
`;
