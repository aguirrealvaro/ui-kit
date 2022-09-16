import { FunctionComponent } from "react";
import { ExclamationCircle } from "@styled-icons/heroicons-outline/ExclamationCircle";
import styled from "styled-components";
import { TooltipProps } from "../Tooltip/Tooltip";
import { Icon, Tooltip } from "@/components";

type InfotipProps = {
  size?: number;
  className?: string;
} & TooltipProps;

export const Infotip: FunctionComponent<InfotipProps> = ({ size = 15, ...restProps }) => {
  return (
    <CustomTooltip {...restProps}>
      <Icon icon={ExclamationCircle} size={size} />
    </CustomTooltip>
  );
};

const CustomTooltip = styled(Tooltip)`
  line-height: 0;
`;
