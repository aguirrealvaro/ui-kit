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
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.assets.border};
  flex-wrap: wrap;
`;

const TabItem = styled.div<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
  ${({ active, theme }) => {
    if (active) {
      return css`
        color: ${theme.assets.primary};
        border-bottom: 2px solid ${theme.assets.primary};
      `;
    } else {
      return css`
        color: ${theme.assets.textPrimary};
        border-bottom: 2px solid transparent;
      `;
    }
  }}
`;
