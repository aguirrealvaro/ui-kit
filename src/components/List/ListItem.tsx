import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type ListItemProps = {
  children: ReactNode;
  startEnhacer?: ReactNode;
  endEnhacer?: ReactNode;
};

export const ListItem: FunctionComponent<ListItemProps> = ({
  children,
  startEnhacer,
  endEnhacer,
}) => {
  return (
    <Item>
      <Content>
        {startEnhacer ? startEnhacer : null}
        <div>{children}</div>
      </Content>
      <div>{endEnhacer ? endEnhacer : null}</div>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: ${({ theme }) => theme.spacing[4]};
  &:hover {
    background-color: ${({ theme }) => theme.assets.hover};
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;
