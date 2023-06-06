import { FunctionComponent, ReactElement, cloneElement, isValidElement } from "react";
import styled from "styled-components";
import { Popper, PopperProps } from "@/components";

type PopoverProps = PopperProps & {
  id: string;
};

const Popover: FunctionComponent<PopoverProps> = ({
  id,
  children,
  position = "bottom",
  trigger,
  triggerMode = "click",
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
      position={position}
      trigger={triggerComponent}
      triggerMode={triggerMode}
      {...restProps}
    >
      <Content id={contentId} aria-labelledby={id} role={popUp}>
        {children}
      </Content>
    </Popper>
  );
};

export { Popover, type PopoverProps };

const Content = styled.div`
  background-color: ${({ theme }) => theme.tokens.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: ${({ theme }) => theme.spacing[1]};
  min-width: ${({ theme }) => theme.spacing[32]};
`;
