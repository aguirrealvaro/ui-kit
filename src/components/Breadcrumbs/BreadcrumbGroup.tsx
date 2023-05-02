import { Children, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type BreadcrumbGroupProps = {
  children: ReactNode;
};

export const BreadcrumbGroup: FunctionComponent<BreadcrumbGroupProps> = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <List>
        {Children.map(children, (child) => {
          return <ItemList>{child}</ItemList>;
        })}
      </List>
    </nav>
  );
};

const List = styled.ol`
  display: flex;
`;

const ItemList = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  &:last-child {
    &:after {
      display: none;
    }
  }
  &:after {
    content: "";
    display: inline-block;
    margin: 0 ${({ theme }) => theme.spacing[2]};
    transform: rotate(15deg);
    border-right: 0.1em solid currentcolor;
    height: ${({ theme }) => theme.sizes[4]};
  }
`;
