import { FunctionComponent } from "react";
import { paths, viewBox } from "./assets";
import { SVGIconType } from "./types";
import { theme } from "@/css";

type SVGIconProps = {
  icon: SVGIconType;
  size?: string;
  color?: string;
};

const SVGIcon: FunctionComponent<SVGIconProps> = ({ icon, color, size = "2rem" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox[icon]}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {paths[icon](color || theme.colors.grey[900])}
    </svg>
  );
};

export { SVGIcon, type SVGIconProps };
