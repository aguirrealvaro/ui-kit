import { FunctionComponent, ReactElement, cloneElement, isValidElement, useId } from "react";
import styled from "styled-components";
import { Popper, PopperProps } from "@/components";

const POP_UP_TYPE = "dialog";

const Popover: FunctionComponent<PopperProps> = ({
  children,
  position = "bottom",
  trigger,
  triggerMode = "click",
  ...restProps
}) => {
  const id = useId();
  const contentId = `${id}-content`;

  const popUpProps = {
    "aria-haspopup": POP_UP_TYPE,
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
      <Content id={contentId} aria-labelledby={id} role={POP_UP_TYPE}>
        {children}
      </Content>
    </Popper>
  );
};

export { Popover };

const Content = styled.div`
  background-color: ${({ theme }) => theme.tokens.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: ${({ theme }) => theme.spacing[1]};
  min-width: ${({ theme }) => theme.spacing[32]};
`;
