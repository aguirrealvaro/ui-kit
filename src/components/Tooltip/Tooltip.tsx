import { FunctionComponent, ReactElement, cloneElement, isValidElement } from "react";
import styled from "styled-components";
import { Popper, PopperProps } from "@/components/Popper";

type TooltipProps = PopperProps & {
  id: string;
};

export const Tooltip: FunctionComponent<TooltipProps> = ({
  id,
  children,
  trigger,
  position = "right",
  triggerMode = "hover",
  ...restProps
}) => {
  const contentId = `${id}-content`;

  const popUp = "dialog";

  const popUpProps = {
    "aria-haspopup": popUp,
    "aria-controls": contentId,
  };

  const triggerComponent = (() => {
    if (!isValidElement(trigger)) return null;
    return cloneElement(trigger as ReactElement, {
      id,
      ...popUpProps,
    });
  })();

  return (
    <Popper
      gap={8}
      triggerMode={triggerMode}
      position={position}
      trigger={triggerComponent}
      {...restProps}
    >
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
