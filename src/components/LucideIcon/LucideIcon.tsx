import { FunctionComponent } from "react";
import { LucideIcon as LucideIconType, LucideProps } from "lucide-react";
import { theme } from "@/css";

type LucideIconProps = {
  icon: LucideIconType;
  size?: string | number;
  color?: string;
} & LucideProps;

export const LucideIcon: FunctionComponent<LucideIconProps> = ({
  icon: IconComponent,
  size = 20,
  color = theme.assets.textPrimary,
  ...restProps
}) => {
  return <IconComponent size={size} color={color} {...restProps} />;
};
