import { FunctionComponent, Children, ReactNode } from "react";
import styled from "styled-components";

type TabsProps = {
  children: ReactNode;
  activeKey: number;
  handleKey: (key: number) => void;
};

export const Tabs: FunctionComponent<TabsProps> = ({ children, activeKey, handleKey }) => {
  return (
    <div>
      <TabList role="tablist">
        {Children.map(children, (child, index) => (
          <TabItem onClick={() => handleKey(index + 1)}>{child}</TabItem>
        ))}
      </TabList>
      <div role="tabpanel"></div>
    </div>
  );
};

const TabList = styled.div`
  display: flex;
`;

const TabItem = styled.div`
  padding: 1rem;
`;
