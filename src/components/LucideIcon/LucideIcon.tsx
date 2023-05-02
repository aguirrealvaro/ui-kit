import { FunctionComponent } from "react";
import { LucideIcon as LucideIconType } from "lucide-react";
import { theme } from "@/css";

type LucideIconProps = {
  icon: LucideIconType;
  size?: string | number;
  color?: string;
};

export const LucideIcon: FunctionComponent<LucideIconProps> = ({
  icon: IconComponent,
  size = 20,
  color,
}) => {
  return <IconComponent size={size} style={{ color: color || theme.assets.textPrimary }} />;
};
