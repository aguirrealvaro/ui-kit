import { FunctionComponent } from "react";
import { paths, viewBox, IconType } from ".";
import { useTheme } from "@/hooks";

type IconProps = {
  icon: IconType;
  size?: string;
  color?: string;
};

export const SVGIcon: FunctionComponent<IconProps> = ({ icon, color, size = "2rem" }) => {
  const { theme } = useTheme();

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox[icon]}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {paths[icon](color || theme.assets.icon)}
    </svg>
  );
};
