import { FunctionComponent } from "react";
import { ExclamationCircle } from "@styled-icons/heroicons-outline/ExclamationCircle";
import styled from "styled-components";
import { PopoverProps } from "../Popover";
import { InfotipSizeType } from "./Infotip.types";
import { Icon, Tooltip } from "@/components";
import { useTheme } from "@/hooks";

type InfotipProps = {
  size?: InfotipSizeType;
} & PopoverProps;

export const Infotip: FunctionComponent<InfotipProps> = ({ size = "sm", ...restProps }) => {
  const { theme } = useTheme();

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
        <Icon icon={ExclamationCircle} size={infotipSize} />
      </IconWrapper>
    </Tooltip>
  );
};

const IconWrapper = styled.div`
  display: inline-block;
`;
