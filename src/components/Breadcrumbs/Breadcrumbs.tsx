import { Children, FunctionComponent, ReactNode } from "react";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import styled from "styled-components";
import { Icon } from "../Icon";

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
              <>{child}</>
              {showSeparator && (
                <Separator>
                  <Icon icon={ChevronRight} size={22} />
                </Separator>
              )}
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
