import { FunctionComponent, Children, ReactNode, useState, isValidElement } from "react";
import styled, { css } from "styled-components";
import { TabProps } from "./components/Tab";

type TabsProps = {
  children: ReactNode;
};

export const Tabs: FunctionComponent<TabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div>
      <TabList role="tablist" aria-label="List of Tabs" aria-orientation="horizontal">
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return;

          const { title } = child.props as TabProps;
          const tabId = `tab${index}`;

          return (
            <TabItemWrapper role="presentation">
              <TabItem
                role="tab"
                active={selectedTab === index}
                onClick={() => setSelectedTab(index)}
                aria-selected={selectedTab === index}
                aria-controls={tabId}
              >
                {title}
              </TabItem>
            </TabItemWrapper>
          );
        })}
      </TabList>
      <div>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return;

          const { children } = child.props as TabProps;
          const tabId = `tab${index}`;

          //if (selectedTab !== index) return null; //replaced with hidden

          return (
            <div role="tabpanel" hidden={selectedTab !== index} aria-labelledby={tabId}>
              {children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TabList = styled.ul`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.assets.border};
  flex-wrap: wrap;
`;

const TabItemWrapper = styled.li`
  list-style: none;
`;

const TabItem = styled.button<{ active: boolean }>`
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
  }};
`;
