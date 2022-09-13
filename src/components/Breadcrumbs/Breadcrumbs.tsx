import { Children, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type BreadcrumbsProps = {
  children: ReactNode;
};

export const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({ children }) => {
  return (
    <nav>
      <List>
        {Children.map(children, (child, index) => {
          const count = Children.count(children);
          const showSeparator = index !== count - 1;

          return (
            <ItemList>
              <span>{child}</span>
              {showSeparator && <Separator>/</Separator>}
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
  margin: 0 0.5rem;
`;
