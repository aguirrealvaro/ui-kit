import {
  FunctionComponent,
  Children,
  ReactNode,
  useState,
  isValidElement,
  KeyboardEvent,
  useRef,
} from "react";
import styled, { css } from "styled-components";
import { TabProps } from "./components/Tab";

type TabsProps = {
  children: ReactNode;
};

export const Tabs: FunctionComponent<TabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const ref = useRef<HTMLButtonElement[]>([]);

  const getTabId = (index: number) => `tab${index}`;

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const first = 0;
    const last = Children.count(children) - 1;

    const tabToSelect = (() => {
      if (event.key === "ArrowLeft") {
        const prev = selectedTab - 1;
        return selectedTab === first ? last : prev;
      } else if (event.key === "ArrowRight") {
        const next = selectedTab + 1;
        return selectedTab === last ? first : next;
      }
    })();

    if (tabToSelect !== undefined) {
      // checking for undefined because tabToSelect can be 0
      setSelectedTab(tabToSelect);
      ref.current[tabToSelect]?.focus();
    }
  };

  return (
    <div>
      <TabList
        role="tablist"
        aria-label="List of Tabs"
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
      >
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return;

          const { title } = child.props as TabProps;
          const isTabSelected = selectedTab === index;

          return (
            <TabItemWrapper role="presentation">
              <TabItem
                role="tab"
                active={isTabSelected}
                onClick={() => setSelectedTab(index)}
                aria-selected={isTabSelected}
                aria-controls={getTabId(index)}
                tabIndex={isTabSelected ? 0 : -1}
                ref={(el) => {
                  if (ref.current && el) {
                    ref.current[index] = el;
                  }
                }}
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

          //if (selectedTab !== index) return null; // replaced with hidden

          return (
            <div
              role="tabpanel"
              hidden={selectedTab !== index}
              aria-labelledby={getTabId(index)}
            >
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
