import { FunctionComponent } from "react";
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
      {children}
    </Popover>
  );
};
