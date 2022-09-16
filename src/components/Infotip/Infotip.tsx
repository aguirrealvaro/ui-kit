import { FunctionComponent } from "react";
import { ExclamationCircle } from "@styled-icons/heroicons-outline/ExclamationCircle";
import styled from "styled-components";
import { theme } from "../App";
import { TooltipProps } from "../Tooltip/Tooltip";
import { SIZES } from "./Infotip.constants";
import { SizeType } from "./Infotip.types";
import { Icon, Tooltip } from "@/components";

type InfotipProps = {
  size?: SizeType;
  className?: string;
} & TooltipProps;

export const Infotip: FunctionComponent<InfotipProps> = ({ size = "sm", ...restProps }) => {
  const infotipSize = SIZES[size];

  return (
    <CustomTooltip {...restProps}>
      <Icon icon={ExclamationCircle} size={infotipSize} color={theme.colors.grey} />
    </CustomTooltip>
  );
};

const CustomTooltip = styled(Tooltip)`
  line-height: 0;
`;
