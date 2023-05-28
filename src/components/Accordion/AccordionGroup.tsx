import {
  FunctionComponent,
  Children,
  ReactNode,
  isValidElement,
  useState,
  useRef,
  KeyboardEvent,
} from "react";
import { ChevronDown } from "lucide-react";
import styled, { css } from "styled-components";
import { AccordionArrowPosition } from "./Accordion.types";
import { AccordionItemProps } from "./AccordionItem";
import { Icon } from "@/components";

type AccordionGroupProps = {
  children: ReactNode;
  id: string;
  arrowPosition?: AccordionArrowPosition;
};

export const AccordionGroup: FunctionComponent<AccordionGroupProps> = ({
  children,
  id,
  arrowPosition = "left",
}) => {
  const accordionTriggersRef = useRef<HTMLButtonElement[]>([]);
  const accordionContentsRef = useRef<HTMLDivElement[]>([]);

  const [openedIndex, setOpenedIndex] = useState<number | undefined>(undefined);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = accordionTriggersRef.current.findIndex(
      (accordion) => accordion === document.activeElement
    );

    const first = 0;
    const last = accordionTriggersRef.current.length - 1;
    const prev = currentIndex === first ? last : currentIndex - 1;
    const next = currentIndex === last ? first : currentIndex + 1;

    if (event.key === "ArrowUp") {
      event.preventDefault();
      accordionTriggersRef.current[prev].focus();
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      accordionTriggersRef.current[next].focus();
    }

    if (event.key === "Home") {
      event.preventDefault();
      accordionTriggersRef.current[first].focus();
    }

    if (event.key === "End") {
      event.preventDefault();
      accordionTriggersRef.current[last].focus();
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      {Children.map(children, (child, index) => {
        if (!isValidElement<AccordionItemProps>(child)) return;

        const { title, children: itemChildren } = child.props;

        const buttonId = `${id}-${index}`;
        const contentId = `${buttonId}-content`;
        const isOpen = openedIndex === index;
        const height = accordionContentsRef.current[index]?.scrollHeight || 0;

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
              $arrowPosition={arrowPosition}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={buttonId}
              ref={(el) => {
                if (el) {
                  accordionTriggersRef.current[index] = el;
                }
              }}
            >
              <Title $arrowPosition={arrowPosition}>{title}</Title>
              <ChevronWrapper
                $isOpen={isOpen}
                $arrowPosition={arrowPosition}
                aria-hidden="true"
              >
                <Icon icon={ChevronDown} />
              </ChevronWrapper>
            </Button>
            <Content
              role="region"
              id={contentId}
              aria-labelledby={buttonId}
              ref={(el) => {
                if (el) {
                  accordionContentsRef.current[index] = el;
                }
              }}
              $height={height}
              $isOpen={isOpen}
            >
              {itemChildren}
            </Content>
          </Container>
        );
      })}
    </div>
  );
};

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.vars.border};
  &:last-child {
    border-bottom: none;
  }
`;

const Button = styled.button<{ $arrowPosition: AccordionArrowPosition }>`
  display: flex;
  align-items: center;
  ${({ $arrowPosition, theme }) => {
    if ($arrowPosition === "right") {
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
`;

const Title = styled.div<{ $arrowPosition: AccordionArrowPosition }>`
  order: ${({ $arrowPosition }) => ($arrowPosition === "right" ? 1 : 2)};
`;

const ChevronWrapper = styled.div<{
  $isOpen: boolean;
  $arrowPosition: AccordionArrowPosition;
}>`
  transform: ${({ $isOpen }) => `rotate(${$isOpen ? "-180" : 0}deg)`};
  transition: transform ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  order: ${({ $arrowPosition }) => ($arrowPosition === "right" ? 2 : 1)};
`;

const Content = styled.div<{ $height: number; $isOpen: boolean }>`
  height: ${({ $isOpen, $height }) => `${$isOpen ? $height : 0}px`};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.durations.fast}ms
    ${({ theme }) => theme.transitions.timings.in};
  margin-left: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ $isOpen, theme }) => $isOpen && theme.spacing[4]};
`;
