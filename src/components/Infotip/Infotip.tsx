import { FunctionComponent } from "react";
import { AlertCircle } from "lucide-react";
import styled from "styled-components";
import { InfotipSizeType } from "./Infotip.types";
import { Icon, PopperProps, Tooltip } from "@/components";
import { theme } from "@/css";

type InfotipProps = {
  size?: InfotipSizeType;
} & PopperProps;

const Infotip: FunctionComponent<InfotipProps> = ({
  children,
  size = "sm",
  trigger: dummyTrigger,
  ...restProps
}) => {
  const sizes: Record<InfotipSizeType, string> = {
    xs: theme.spacing[4],
    sm: theme.spacing[5],
    md: theme.spacing[6],
    lg: theme.spacing[7],
  };

  const infotipSize = sizes[size];

  const infoIcon = (
    <IconWrapper>
      <Icon icon={AlertCircle} size={infotipSize} />
    </IconWrapper>
  );

  return (
    <Tooltip trigger={infoIcon} {...restProps}>
      {children}
    </Tooltip>
  );
};

const IconWrapper = styled.div`
  display: inline-flex;
`;

export { Infotip, type InfotipProps };
