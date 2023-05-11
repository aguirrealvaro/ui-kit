import { FunctionComponent, ReactElement, cloneElement, isValidElement } from "react";
import styled from "styled-components";
import { Popper, PopperProps } from "@/components/Popper";

type PopoverProps = PopperProps & {
  id: string;
};

export const PopoverNew: FunctionComponent<PopoverProps> = ({
  id,
  children,
  position = "bottom",
  trigger = "click",
  ...restProps
}) => {
  const contentId = `${id}-content`;

  const popUpProps = {
    "aria-haspopup": "dialog",
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
    <Popper position={position} trigger={triggerComponent} {...restProps}>
      <Content id={contentId} aria-labelledby={id} role="dialog">
        {children}
      </Content>
    </Popper>
  );
};

const Content = styled.div`
  background-color: ${({ theme }) => theme.vars.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: ${({ theme }) => theme.spacing[1]};
  min-width: ${({ theme }) => theme.sizes[32]};
`;
