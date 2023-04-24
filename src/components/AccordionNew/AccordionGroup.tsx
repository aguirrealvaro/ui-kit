import {
  FunctionComponent,
  Children,
  ReactNode,
  isValidElement,
  useState,
  useRef,
} from "react";
import { ChevronDown } from "@styled-icons/fluentui-system-filled/ChevronDown";
import styled, { css } from "styled-components";
import { AccordionArrowPosition } from "./Accordion.types";
import { AccordionItemProps } from "./AccordionItem";
import { Icon } from "@/components";
import { useTheme } from "@/hooks";

type AccordionGroupNewProps = {
  children: ReactNode;
  arrowPosition: AccordionArrowPosition;
};

export const AccordionGroupNew: FunctionComponent<AccordionGroupNewProps> = ({
  children,
  arrowPosition,
}) => {
  const { theme } = useTheme();

  const [openedIndex, setOpenedIndex] = useState<number | undefined>(undefined);

  const refs = useRef<HTMLDivElement[]>([]);

  return (
    <>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return;

        const {
          trigger,
          disabled,
          children: itemChildren,
        } = child.props as AccordionItemProps;

        const buttonId = `accordion-${index}`;
        const contentId = `accordion-content-${index}`;
        const isOpen = openedIndex === index;
        const height = refs.current[index]?.scrollHeight || 0;

        const toggle = () => {
          if (isOpen) {
            setOpenedIndex(undefined);
          } else {
            setOpenedIndex(index);
          }
        };

        return (
          <Container>
            <Button
              type="button"
              onClick={toggle}
              disabled={disabled}
              arrowPosition={arrowPosition}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={buttonId}
            >
              <Title arrowPosition={arrowPosition}>{trigger}</Title>
              <ChevronWrapper isOpen={isOpen} arrowPosition={arrowPosition}>
                <Icon
                  icon={ChevronDown}
                  size={15}
                  {...(disabled && { color: theme.assets.disabledBg })}
                />
              </ChevronWrapper>
            </Button>
            <Content
              role="region"
              id={contentId}
              aria-labelledby={buttonId}
              ref={(el) => {
                if (el) {
                  refs.current[index] = el;
                }
              }}
              height={height}
              isOpen={isOpen}
            >
              {itemChildren}
            </Content>
          </Container>
        );
      })}
    </>
  );
};

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.assets.border};
  &:last-child {
    border-bottom: none;
  }
`;

const Button = styled.button<{ arrowPosition: AccordionArrowPosition }>`
  display: flex;
  align-items: center;
  ${({ arrowPosition, theme }) => {
    if (arrowPosition === "right") {
      return css`
        justify-content: space-between;
      `;
    } else {
      return css`
        gap: ${theme.spacing[2]};
      `;
    }
  }}
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]} 0;
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.assets.disabledBg};
  }
`;

const Title = styled.div<{ arrowPosition: AccordionArrowPosition }>`
  order: ${({ arrowPosition }) => (arrowPosition === "right" ? 1 : 2)};
`;

const ChevronWrapper = styled.div<{ isOpen: boolean; arrowPosition: AccordionArrowPosition }>`
  transform: ${({ isOpen }) => `rotate(${isOpen ? "-180" : 0}deg)`};
  transition: transform ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  order: ${({ arrowPosition }) => (arrowPosition === "right" ? 2 : 1)};
`;

const Content = styled.div<{ height: number; isOpen: boolean }>`
  height: ${({ isOpen, height }) => `${isOpen ? height : 0}px`};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.durations.fast}ms
    ${({ theme }) => theme.transitions.timings.in};
  margin-left: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ isOpen, theme }) => isOpen && theme.spacing[4]};
`;
