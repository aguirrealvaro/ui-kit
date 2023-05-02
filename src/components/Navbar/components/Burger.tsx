import { FunctionComponent } from "react";
import { Menu } from "lucide-react";
import styled from "styled-components";
import { IconButton, Icon } from "@/components";

type BurgerProps = { onClick: () => void };

export const Burger: FunctionComponent<BurgerProps> = ({ onClick }) => {
  return (
    <Container>
      <IconButton onClick={onClick}>
        <Icon icon={Menu} size={25} />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoint("md")} {
    display: block;
  }
`;
