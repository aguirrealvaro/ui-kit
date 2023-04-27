import { FunctionComponent } from "react";
import styled from "styled-components";
import { Popover, PopoverProps } from "../Popover";

type DropdownProps = Omit<PopoverProps, "position"> & {
  position?: "bottom" | "bottom-left" | "bottom-right";
};

export const Dropdown: FunctionComponent<DropdownProps> = ({
  children,
  position = "bottom",
  content,
  ...restProps
}) => {
  // TO DO: Ideally, i would use cloneElement and pass styles there
  const dropdownContent = <Content>{content}</Content>;

  return (
    <Popover position={position} popUpType="menu" content={dropdownContent} {...restProps}>
      {children}
    </Popover>
  );
};

const Content = styled.div`
  background-color: ${({ theme }) => theme.assets.bgTertiary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: ${({ theme }) => theme.spacing[5]};
`;
