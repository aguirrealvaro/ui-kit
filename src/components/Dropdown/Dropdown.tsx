import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Popover, PopoverProps } from "../Popover";

type DropdownProps = Omit<PopoverProps, "position"> & {
  position?: "bottom" | "bottom-left" | "bottom-right";
};

export const Dropdown: FunctionComponent<DropdownProps> = ({
  children,
  content,
  position = "bottom",
  ...restProps
}) => {
  const popoverContent = (
    <Content withTriggerWidth={restProps.withTriggerWidth || false}>{content}</Content>
  );

  return (
    <Popover content={popoverContent} position={position} {...restProps}>
      {children}
    </Popover>
  );
};

const Content = styled.div<{ withTriggerWidth: boolean }>`
  background-color: ${({ theme }) => theme.assets.bgTertiary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: ${({ theme }) => theme.spacing[5]};
  ${({ withTriggerWidth, theme }) => {
    if (!withTriggerWidth)
      return css`
        max-width: ${theme.sizes[60]};
      `;
  }}
`;
