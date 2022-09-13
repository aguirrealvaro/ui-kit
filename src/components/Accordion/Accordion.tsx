import { useState, useRef, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { Icon } from "@/components";

const ANIMATION_TIME = 200;

type AccordionProps = {
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
  className?: string;
};

export const Accordion: FunctionComponent<AccordionProps> = ({
  title,
  content,
  disabled,
  className,
}) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setActive(!active);
  const height = ref.current?.scrollHeight || 0;

  return (
    <div className={className}>
      <Button onClick={toggle} disabled={disabled}>
        <div>{title}</div>
        <Chevron icon="chevron_down" active={active} size="14px" marginLeft="10px" />
      </Button>
      <Content ref={ref} height={height} active={active}>
        {content}
      </Content>
    </div>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Chevron = styled(Icon)<{ active: boolean }>`
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${ANIMATION_TIME}ms ease;
`;

const Content = styled.div<{ height: number; active: boolean }>`
  max-height: ${({ active, height }) => `${active ? height : 0}px`};
  overflow: hidden;
  transition: max-height ${ANIMATION_TIME}ms ease;
  margin: 1rem 0 0 1rem;
`;
