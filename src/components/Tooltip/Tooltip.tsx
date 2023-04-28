import { FunctionComponent } from "react";
import styled from "styled-components";
import { Popover, PopoverProps } from "../Popover";

export const Tooltip: FunctionComponent<PopoverProps> = ({
  children,
  content,
  ...restProps
}) => {
  // TO DO: Ideally, i would use cloneElement and pass styles there
  const popoverContent = <Content>{content}</Content>;

  return (
    <Popover content={popoverContent} gap={8} {...restProps}>
      {children}
    </Popover>
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
