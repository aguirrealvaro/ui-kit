import { FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";

type ListProps = {
  children: ReactNode;
  nested?: boolean;
};

export const List: FunctionComponent<ListProps> = ({ children, nested = false }) => {
  return <Container nested={nested}>{children}</Container>;
};

const Container = styled.ul<{ nested: boolean }>`
  ${({ nested }) => {
    if (nested) {
      return css`
        margin-left: ${({ theme }) => theme.spacing[8]};
        > li {
          &:first-child {
            margin-top: ${({ theme }) => theme.spacing[2]};
          }
        }
      `;
    }
  }}
`;
