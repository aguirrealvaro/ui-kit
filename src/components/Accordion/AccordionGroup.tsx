import { FunctionComponent, Children, ReactNode } from "react";
import styled, { css } from "styled-components";

type AccordionGroupProps = {
  children: ReactNode;
  showSeparator?: boolean;
};

export const AccordionGroup: FunctionComponent<AccordionGroupProps> = ({
  children,
  showSeparator = true,
}) => {
  return (
    <>
      {Children.map(children, (child) => {
        return <Child showSeparator={showSeparator}>{child}</Child>;
      })}
    </>
  );
};

const Child = styled.div<{ showSeparator: boolean }>`
  ${({ showSeparator }) => {
    if (showSeparator) {
      return css`
        border-bottom: 1px solid ${({ theme }) => theme.assets.border};
        &:last-child {
          border-bottom: none;
        }
      `;
    }
  }}
`;
