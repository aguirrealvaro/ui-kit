import { FunctionComponent } from "react";
import styled from "styled-components";
import { Popper, PopperProps } from "@/components/Popper";

export const Tooltip: FunctionComponent<PopperProps> = ({
  children,
  position = "right",
  triggerMode = "hover",
  ...restProps
}) => {
  return (
    <Popper gap={8} triggerMode={triggerMode} position={position} {...restProps}>
      <Content>{children}</Content>
    </Popper>
  );
};

const Content = styled.span`
  display: block;
  padding: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
`;
