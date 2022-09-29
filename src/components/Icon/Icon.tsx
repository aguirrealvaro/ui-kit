import { FunctionComponent } from "react";
import { StyledIcon } from "styled-icons/types";
import { useTheme } from "@/hooks";

type IconProps = {
  icon: StyledIcon;
  size?: string | number;
  color?: string;
};

export const Icon: FunctionComponent<IconProps> = ({
  icon: IconComponent,
  size = 30,
  color,
}) => {
  const { theme } = useTheme();

  return <IconComponent size={size} style={{ color: color || theme.colors.grey[6] }} />;
};
