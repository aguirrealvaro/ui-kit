import { FunctionComponent } from "react";
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline";
import styled from "styled-components";
import { Icon } from "@/components";

type BurgerProps = { onClick: () => void };

export const Burger: FunctionComponent<BurgerProps> = ({ onClick }) => (
  <CustomButton onClick={onClick}>
    <Icon icon={MenuOutline} />
  </CustomButton>
);

const CustomButton = styled.button`
  line-height: 0px;
  display: none;
  padding: 6px;
  border-radius: 5px;
  transition: background-color 200ms linear;
  background-color: transparent;
  ${({ theme }) => theme.breakpoint("lg")} {
    display: block;
  }
`;
