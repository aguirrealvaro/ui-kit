import { FunctionComponent } from "react";
import { ExclamationCircle } from "@styled-icons/heroicons-outline/ExclamationCircle";
import styled from "styled-components";
import { PopoverProps } from "../Popover";
import { INFOTIP_SIZES } from "./Infotip.constants";
import { InfotipSizeType } from "./Infotip.types";
import { Icon, Tooltip } from "@/components";
import { useTheme } from "@/hooks";

type InfotipProps = {
  size?: InfotipSizeType;
} & PopoverProps;

export const Infotip: FunctionComponent<InfotipProps> = ({ size = "sm", ...restProps }) => {
  const { theme } = useTheme();
  const infotipSize = INFOTIP_SIZES[size];

  return (
    <CustomTooltip {...restProps}>
      <Icon icon={ExclamationCircle} size={infotipSize} color={theme.assets.neutral} />
    </CustomTooltip>
  );
};

const CustomTooltip = styled(Tooltip)`
  line-height: 0;
`;
