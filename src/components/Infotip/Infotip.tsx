import { FunctionComponent } from "react";
import { ExclamationCircle } from "@styled-icons/heroicons-outline/ExclamationCircle";
import styled from "styled-components";
import { theme } from "../App";
import { PopoverProps } from "../Popover";
import { SIZES } from "./Infotip.constants";
import { InfotipSizeType } from "./Infotip.types";
import { Icon, Tooltip } from "@/components";

type InfotipProps = {
  size?: InfotipSizeType;
} & PopoverProps;

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
