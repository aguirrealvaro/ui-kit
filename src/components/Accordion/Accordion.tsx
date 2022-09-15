import { useState, useRef, FunctionComponent, ReactNode } from "react";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import styled, { css } from "styled-components";
import { ANIMATION_TIME } from "./Accordion.constants";
import { Icon } from "@/components";

type AccordionProps = {
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  showBorder?: boolean;
};

export const Accordion: FunctionComponent<AccordionProps> = ({
  title,
  children,
  disabled,
  className,
  showBorder = false,
}) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setActive(!active);
  const height = ref.current?.scrollHeight || 0;

  return (
    <Container className={className} showBorder={showBorder}>
      <Button onClick={toggle} disabled={disabled}>
        <div>{title}</div>
        <ChevronWrapper active={active}>
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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ChevronWrapper = styled.div<{ active: boolean }>`
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${ANIMATION_TIME}ms ease;
`;

const Content = styled.div<{ height: number; active: boolean }>`
  max-height: ${({ active, height }) => `${active ? height : 0}px`};
  overflow: hidden;
  transition: all ${ANIMATION_TIME}ms ease;
  margin-left: 1rem;
  margin-bottom: ${({ active }) => active && "1rem"};
`;
