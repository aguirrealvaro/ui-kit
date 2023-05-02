import { Children, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type BreadcrumbGroupProps = {
  children: ReactNode;
};

export const BreadcrumbGroup: FunctionComponent<BreadcrumbGroupProps> = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <List>
        {Children.map(children, (child, index) => {
          const count = Children.count(children);
          const showSeparator = index !== count - 1;

          return (
            <ItemList>
              <>{child}</>
              {showSeparator && <Separator aria-hidden="true">/</Separator>}
            </ItemList>
          );
        })}
      </List>
    </nav>
  );
};

const List = styled.ol`
  display: flex;
`;

const ItemList = styled.li`
  list-style: none;
`;

const Separator = styled.span`
  margin: 0 ${({ theme }) => theme.spacing[2]};
`;
