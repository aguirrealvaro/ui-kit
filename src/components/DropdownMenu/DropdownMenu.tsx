import {
  FunctionComponent,
  ReactElement,
  cloneElement,
  isValidElement,
  KeyboardEvent,
  Children,
  useRef,
  useId,
} from "react";
import styled from "styled-components";
import { Popper, type PopperProps } from "@/components";

const DropdownMenu: FunctionComponent<PopperProps> = ({
  children,
  trigger,
  triggerMode = "click",
  position = "bottom",
  ...restProps
}) => {
  const id = useId();
  const dropdownMenuItemsRef = useRef<HTMLDivElement[]>([]);

  const contentId = `${id}-content`;

  const popUp = "menu";

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

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = dropdownMenuItemsRef.current.findIndex(
      (item) => item === document.activeElement
    );

    const first = 0;
    const last = dropdownMenuItemsRef.current.length - 1;
    const prev = currentIndex - 1;
    const next = currentIndex + 1;

    if (event.key === "ArrowUp") {
      if (dropdownMenuItemsRef.current[prev]) {
        event.preventDefault();
        dropdownMenuItemsRef.current[prev].focus();
      }
    }

    if (event.key === "ArrowDown") {
      if (dropdownMenuItemsRef.current[next]) {
        event.preventDefault();
        dropdownMenuItemsRef.current[next].focus();
      }
    }

    if (event.key === "Home") {
      if (dropdownMenuItemsRef.current[first]) {
        event.preventDefault();
        dropdownMenuItemsRef.current[first].focus();
      }
    }

    if (event.key === "End") {
      if (dropdownMenuItemsRef.current[last]) {
        event.preventDefault();
        dropdownMenuItemsRef.current[last].focus();
      }
    }
  };

  const childrenComponent = (() => {
    return Children.map(children, (child, index) => {
      if (!isValidElement(child)) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((child.type as any).displayName === "DropdownMenuItem") {
        return cloneElement(child as ReactElement, {
          ref: (el: HTMLDivElement) => {
            if (el) {
              dropdownMenuItemsRef.current[index] = el;
            }
          },
        });
      } else {
        return cloneElement(child);
      }
    });
  })();

  return (
    <Popper
      position={position}
      trigger={triggerComponent}
      triggerMode={triggerMode}
      {...restProps}
    >
      <Content id={contentId} aria-labelledby={id} role={popUp} onKeyDown={handleKeyDown}>
        {childrenComponent}
      </Content>
    </Popper>
  );
};

export { DropdownMenu };

const Content = styled.div`
  background-color: ${({ theme }) => theme.tokens.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: ${({ theme }) => theme.spacing[1]};
  min-width: ${({ theme }) => theme.spacing[32]};
`;
