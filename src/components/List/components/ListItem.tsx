import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type ListItemProps = {
  children: ReactNode;
};

export const ListItem: FunctionComponent<ListItemProps> = ({ children }) => {
  return <Item>{children}</Item>;
};

const Item = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  &:last-child {
    margin-bottom: 0;
  }
`;
