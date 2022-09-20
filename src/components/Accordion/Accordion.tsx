import { useState, useRef, FunctionComponent, ReactNode } from "react";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import styled, { css } from "styled-components";
import { ANIMATION_TIME } from "./Accordion.constants";
import { ArrowPosition } from "./Accordion.types";
import { Icon } from "@/components";

type AccordionProps = {
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  showBorder?: boolean;
  arrowPosition?: ArrowPosition;
};

export const Accordion: FunctionComponent<AccordionProps> = ({
  title,
  children,
  disabled,
  className,
  showBorder = false,
  arrowPosition = "right",
}) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setActive(!active);
  const height = ref.current?.scrollHeight || 0;

  return (
    <Container className={className} showBorder={showBorder}>
      <Button onClick={toggle} disabled={disabled} arrowPosition={arrowPosition}>
        <Title arrowPosition={arrowPosition}>{title}</Title>
        <ChevronWrapper active={active} arrowPosition={arrowPosition}>
          <Icon icon={ChevronDown} size={20} />
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
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
        &:last-child {
          border-bottom: none;
        }
      `;
    }
  }}
`;

const Button = styled.button<{ arrowPosition: ArrowPosition }>`
  display: flex;
  align-items: center;
  ${({ arrowPosition }) => {
    if (arrowPosition === "right") {
      return css`
        justify-content: space-between;
      `;
    } else {
      return css`
        gap: 8px;
      `;
    }
  }}
  width: 100%;
  padding: 1rem 0;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Title = styled.div<{ arrowPosition: ArrowPosition }>`
  order: ${({ arrowPosition }) => (arrowPosition === "right" ? 1 : 2)};
`;

const ChevronWrapper = styled.div<{ active: boolean; arrowPosition: ArrowPosition }>`
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${ANIMATION_TIME}ms ease;
  order: ${({ arrowPosition }) => (arrowPosition === "right" ? 2 : 1)};
`;

const Content = styled.div<{ height: number; active: boolean }>`
  max-height: ${({ active, height }) => `${active ? height : 0}px`};
  overflow: hidden;
  transition: all ${ANIMATION_TIME}ms ease;
  margin-left: 1rem;
  margin-bottom: ${({ active }) => active && "1rem"};
`;
