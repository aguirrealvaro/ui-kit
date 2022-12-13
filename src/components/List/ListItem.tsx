import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type ListItemProps = {
  children: ReactNode;
  startEnhacer?: ReactNode;
  endEnhacer?: ReactNode;
  onClick?: () => void;
};

export const ListItem: FunctionComponent<ListItemProps> = ({
  children,
  startEnhacer,
  endEnhacer,
  onClick,
}) => {
  return (
    <Item onClick={onClick} isClickable={Boolean(onClick)}>
      <Content>
        {startEnhacer ? startEnhacer : null}
        <div>{children}</div>
      </Content>
      <div>{endEnhacer ? endEnhacer : null}</div>
    </Item>
  );
};

const Item = styled.li<{ isClickable: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: ${({ theme }) => theme.spacing[4]};
  &:hover {
    background-color: ${({ theme }) => theme.assets.hover};
  }
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;
