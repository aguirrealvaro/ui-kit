import { FunctionComponent } from "react";
import { StyledIcon as StyledIconType } from "styled-icons/types";

type IconProps = {
  icon: StyledIconType;
  size?: string;
  color?: string;
};

export const StyledIcon: FunctionComponent<IconProps> = ({
  icon: Icon,
  size = "30px",
  color = "#000",
}) => {
  return <Icon size={size} style={{ color }} />;
};
