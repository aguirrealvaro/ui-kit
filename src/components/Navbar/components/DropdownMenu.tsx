import { FunctionComponent } from "react";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import { ChevronDown } from "@styled-icons/fluentui-system-filled/ChevronDown";
import styled from "styled-components";
import { NavbarItem } from "../Navbar.types";
import { Dropdown, Icon } from "@/components";

type MainMenuProps = { user: string; items: NavbarItem[] };

export const DropdownMenu: FunctionComponent<MainMenuProps> = ({ user, items }) => {
  const dropdownContent = (
    <DropdownContainer>
      {items
        .filter(({ show = true }) => show)
        .map(({ label, onClick, disabled = false }, i) => (
          <Item key={i} onClick={onClick} disabled={disabled}>
            {label}
          </Item>
        ))}
    </DropdownContainer>
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
  display: flex;
  ${({ theme }) => theme.breakpoint("lg")} {
    display: none;
  }
`;

const Profile = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Item = styled.button`
  display: block;
  &:disabled {
    color: ${({ theme }) => theme.assets.disabledBg};
    cursor: not-allowed;
  }
`;
