import { FunctionComponent, ReactElement, cloneElement, isValidElement, useId } from "react";
import styled from "styled-components";
import { Popper, type PopperProps } from "@/components";

const Tooltip: FunctionComponent<PopperProps> = ({
  children,
  trigger,
  position = "right",
  triggerMode = "hover",
  ...restProps
}) => {
  const id = useId();
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

export { Tooltip };

const Content = styled.span`
  display: block;
  padding: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
`;
