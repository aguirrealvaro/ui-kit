import { FunctionComponent } from "react";
import styled from "styled-components";
import { paths, viewBox, IconType } from ".";
import { useTheme } from "@/hooks";

type IconProps = {
  icon: IconType;
  size?: string;
  color?: string;
  marginRight?: string;
  marginLeft?: string;
};

export const SVGIcon: FunctionComponent<IconProps> = ({
  icon,
  color,
  size = "20px",
  marginRight,
  marginLeft,
}) => {
  const { theme } = useTheme();

  return (
    <SVG
      width={size}
      height={size}
      viewBox={viewBox[icon]}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      marginRight={marginRight}
      marginLeft={marginLeft}
    >
      {paths[icon](color || theme.colors.black)}
    </SVG>
  );
};

const SVG = styled.svg<{ marginRight?: string; marginLeft?: string }>`
  margin-right: ${({ marginRight }) => marginRight};
  margin-left: ${({ marginLeft }) => marginLeft};
`;
