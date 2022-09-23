import { FunctionComponent, Children, ReactNode, useState, isValidElement } from "react";
import styled, { css } from "styled-components";
import { TabProps } from "./components/Tab";

type TabsProps = {
  children: ReactNode;
};

export const Tabs: FunctionComponent<TabsProps> = ({ children }) => {
  const [activeKey, setActiveKey] = useState<number>(0);

  return (
    <div>
      <TabList role="tablist">
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return;

          const { title } = child.props as TabProps;

          return (
            <TabItem
              role="tab"
              active={activeKey === index}
              onClick={() => setActiveKey(index)}
            >
              {title}
            </TabItem>
          );
        })}
      </TabList>
      <div>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return;

          const { children } = child.props as TabProps;

          if (activeKey !== index) return null;

          return <div role="tabpanel">{children}</div>;
        })}
      </div>
    </div>
  );
};

const TabList = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  //overflow-y: hidden;
  flex-wrap: wrap;
`;

const TabItem = styled.div<{ active: boolean }>`
  padding: 1rem;
  cursor: pointer;
  ${({ active, theme }) => {
    if (active) {
      return css`
        color: ${theme.colors.blue.base};
        border-bottom: 2px solid ${theme.colors.blue.base};
      `;
    } else {
      return css`
        color: ${theme.colors.grey[13]};
        border-bottom: 2px solid transparent;
      `;
    }
  }}
`;
