import { FunctionComponent } from "react";
import { AlertCircle } from "lucide-react";
import styled from "styled-components";
import { PopoverProps } from "../Popover";
import { InfotipSizeType } from "./Infotip.types";
import { LucideIcon, Tooltip } from "@/components";
import { theme } from "@/css";

type InfotipProps = {
  size?: InfotipSizeType;
} & PopoverProps;

export const Infotip: FunctionComponent<InfotipProps> = ({ size = "sm", ...restProps }) => {
  const sizes: Record<InfotipSizeType, string> = {
    xs: theme.spacing[4],
    sm: theme.spacing[5],
    md: theme.spacing[6],
    lg: theme.spacing[7],
  };

  const infotipSize = sizes[size];

  return (
    <Tooltip {...restProps}>
      <IconWrapper>
        <LucideIcon icon={AlertCircle} size={infotipSize} />
      </IconWrapper>
    </Tooltip>
  );
};

const IconWrapper = styled.div`
  display: inline-block;
`;
