import { FunctionComponent } from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import { theme } from "@/css";

type IconProps = {
  icon: LucideIcon;
  size?: string | number;
  color?: string;
} & LucideProps;

export const Icon: FunctionComponent<IconProps> = ({
  icon: IconComponent,
  size = 20,
  color = theme.assets.textPrimary,
  ...restProps
}) => {
  return <IconComponent size={size} color={color} {...restProps} />;
};
