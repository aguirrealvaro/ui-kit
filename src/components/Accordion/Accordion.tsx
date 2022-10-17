import { useState, useRef, FunctionComponent, ReactNode } from "react";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import styled, { css } from "styled-components";
import { AccordionArrowPosition } from "./Accordion.types";
import { Icon } from "@/components";
import { useTheme } from "@/hooks";

type AccordionProps = {
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  showBorder?: boolean;
  arrowPosition?: AccordionArrowPosition;
};

export const Accordion: FunctionComponent<AccordionProps> = ({
  title,
  children,
  disabled,
  showBorder = false,
  arrowPosition = "right",
}) => {
  const { theme } = useTheme();
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setActive(!active);
  const height = ref.current?.scrollHeight || 0;

  return (
    <Container showBorder={showBorder}>
      <Button onClick={toggle} disabled={disabled} arrowPosition={arrowPosition}>
        <Title arrowPosition={arrowPosition}>{title}</Title>
        <ChevronWrapper active={active} arrowPosition={arrowPosition}>
          <Icon
            icon={ChevronDown}
            size={20}
            {...(disabled && { color: theme.assets.disabledBg })}
          />
        </ChevronWrapper>
      </Button>
      <Content ref={ref} height={height} active={active}>
        {children}
      </Content>
    </Container>
  );
};

const Container = styled.div<{ showBorder: boolean }>`
  ${({ showBorder }) => {
    if (showBorder) {
      return css`
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey[3]};
        &:last-child {
          border-bottom: none;
        }
      `;
    }
  }}
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
        gap: ${theme.spacing[8]};
      `;
    }
  }}
  width: 100%;
  padding: 1rem 0;
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.assets.disabledBg};
  }
`;

const Title = styled.div<{ arrowPosition: AccordionArrowPosition }>`
  order: ${({ arrowPosition }) => (arrowPosition === "right" ? 1 : 2)};
`;

const ChevronWrapper = styled.div<{ active: boolean; arrowPosition: AccordionArrowPosition }>`
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  order: ${({ arrowPosition }) => (arrowPosition === "right" ? 2 : 1)};
`;

const Content = styled.div<{ height: number; active: boolean }>`
  max-height: ${({ active, height }) => `${active ? height : 0}px`};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.durations.fast}ms
    ${({ theme }) => theme.transitions.timings.in};
  margin-left: 1rem;
  margin-bottom: ${({ active }) => active && "1rem"};
`;
