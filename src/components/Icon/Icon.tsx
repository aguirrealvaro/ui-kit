import { FunctionComponent } from "react";
import { LucideIcon, LucideProps } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: string | number;
  color?: string;
} & LucideProps;

const Icon: FunctionComponent<IconProps> = ({
  icon: IconComponent,
  size = 20,
  ...restProps
}) => {
  return <IconComponent size={size} {...restProps} />;
};

export { Icon, type IconProps };
