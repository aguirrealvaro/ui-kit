import { useState, useRef, FunctionComponent, ReactNode } from "react";
import { ChevronDown } from "@styled-icons/fluentui-system-filled/ChevronDown";
import styled, { css } from "styled-components";
import { AccordionArrowPosition } from "./Accordion.types";
import { Icon } from "@/components";
import { useTheme } from "@/hooks";

type AccordionProps = {
  title: ReactNode;
  children: ReactNode;
  index: number;
  disabled?: boolean;
  arrowPosition?: AccordionArrowPosition;
};

export const Accordion: FunctionComponent<AccordionProps> = ({
  title,
  children,
  index,
  disabled,
  arrowPosition = "right",
}) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen(!isOpen);
  const height = ref.current?.scrollHeight || 0;

  const buttonId = `accordion-${index}`;
  const contentId = `accordion-content-${index}`;

  return (
    <div>
      <Button
        type="button"
        onClick={toggle}
        disabled={disabled}
        arrowPosition={arrowPosition}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={buttonId}
      >
        <Title arrowPosition={arrowPosition}>{title}</Title>
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
        ref={ref}
        height={height}
        isOpen={isOpen}
      >
        {children}
      </Content>
    </div>
  );
};

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
