import { FunctionComponent } from "react";
import styled from "styled-components";
import { Popover, PopoverProps } from "../Popover";

export const Tooltip: FunctionComponent<PopoverProps> = ({
  children,
  content,
  ...restProps
}) => {
  const popoverContent = <Content>{content}</Content>;

  return (
    <Popover content={popoverContent} gap={8} {...restProps}>
      {children}
    </Popover>
  );
};

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.colors.grey[10]};
  color: ${({ theme }) => theme.colors.grey[1]};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
`;
