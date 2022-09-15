import { FunctionComponent } from "react";
import { ExclamationCircle } from "@styled-icons/heroicons-outline/ExclamationCircle";
import styled from "styled-components";
import { TooltipProps } from "../Tooltip/Tooltip";
import { Icon, Tooltip } from "@/components";

type ExclamationTooltip = {
  size?: string;
  className?: string;
} & TooltipProps;

export const ExclamationTooltip: FunctionComponent<ExclamationTooltip> = ({
  size = "15px",
  ...restProps
}) => (
  <CustomTooltip {...restProps}>
    <Icon icon={ExclamationCircle} size={size} />
  </CustomTooltip>
);

const CustomTooltip = styled(Tooltip)`
  line-height: 0;
`;
