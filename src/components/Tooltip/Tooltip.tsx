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
    <Popover content={popoverContent} gap={16} {...restProps}>
      {children}
    </Popover>
  );
};

const Content = styled.div`
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 0.8rem;
`;
