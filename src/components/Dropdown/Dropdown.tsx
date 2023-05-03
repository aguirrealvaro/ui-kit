import { FunctionComponent } from "react";
import styled from "styled-components";
import { Popover, PopoverProps } from "../Popover";

type DropdownProps = Omit<PopoverProps, "position"> & {
  position?: "bottom" | "bottom-left" | "bottom-right";
};

export const Dropdown: FunctionComponent<DropdownProps> = ({
  children,
  position = "bottom",
  ...restProps
}) => {
  return (
    <Popover position={position} popUpType="menu" {...restProps}>
      <Content>{children}</Content>
    </Popover>
  );
};

const Content = styled.div`
  background-color: ${({ theme }) => theme.assets.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: ${({ theme }) => theme.spacing[1]};
`;
