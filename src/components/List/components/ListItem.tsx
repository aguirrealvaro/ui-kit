import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type ListItemProps = {
  children: ReactNode;
};

export const ListItem: FunctionComponent<ListItemProps> = ({ children }) => {
  return <Item>{children}</Item>;
};

const Item = styled.li`
  margin-bottom: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
