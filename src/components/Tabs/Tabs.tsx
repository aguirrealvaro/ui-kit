import { FunctionComponent, Children, ReactNode, useState, isValidElement } from "react";
import styled from "styled-components";

type TabsProps = {
  children: ReactNode;
};

export const Tabs: FunctionComponent<TabsProps> = ({ children }) => {
  const [activeKey, setActiveKey] = useState<number>(1);

  const handleClickTab = (tab: number) => {
    setActiveKey(tab);
  };

  return (
    <div>
      <TabList role="tablist">
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return;
          const { title } = child.props as TabProps;
          return <TabItem onClick={() => handleClickTab(index + 1)}>{title}</TabItem>;
        })}
      </TabList>
      <div>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return;
          const { children } = child.props as TabProps;
          if (activeKey !== index + 1) return null;
          return <div>{children}</div>;
        })}
      </div>
    </div>
  );
};

type TabProps = {
  children: ReactNode;
  title: string;
};

export const Tab: FunctionComponent<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

const TabList = styled.div`
  display: flex;
`;

const TabItem = styled.div`
  padding: 1rem;
`;
