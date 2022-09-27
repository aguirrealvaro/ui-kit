import { FunctionComponent } from "react";
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline";
import styled from "styled-components";
import { Icon, IconButton } from "@/components";

type BurgerProps = { onClick: () => void };

export const Burger: FunctionComponent<BurgerProps> = ({ onClick }) => {
  return (
    <Container>
      <IconButton onClick={onClick} withHover={false}>
        <Icon icon={MenuOutline} />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoint("lg")} {
    display: block;
  }
`;
