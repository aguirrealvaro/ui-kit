import { FunctionComponent } from "react";
import { StyledIcon } from "styled-icons/types";
import { theme } from "@/components/App";

type IconProps = {
  icon: StyledIcon;
  size?: number;
  color?: string;
};

export const Icon: FunctionComponent<IconProps> = ({
  icon: IconComponent,
  size = 30,
  color = theme.colors.black,
}) => {
  return <IconComponent size={size} style={{ color }} />;
};
