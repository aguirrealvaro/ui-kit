import { FunctionComponent } from "react";
import styled from "styled-components";
import { Popover, PopoverProps } from "../Popover";

export const Dropdown: FunctionComponent<PopoverProps> = ({
  children,
  content,
  ...restProps
}) => {
  const popoverContent = <Content>{content}</Content>;

  return (
    <Popover content={popoverContent} gap={8} trigger="click" {...restProps}>
      {children}
    </Popover>
  );
};

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.grey[1]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 9px;
  padding: 1.2rem;
`;
