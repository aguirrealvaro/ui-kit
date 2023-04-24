import {
  FunctionComponent,
  Children,
  ReactNode,
  useState,
  isValidElement,
  KeyboardEvent,
  useRef,
  useEffect,
} from "react";
import styled, { css } from "styled-components";
import { TabProps } from "./Tab";

type TabsProps = {
  children: ReactNode;
  id: string;
};

export const Tabs: FunctionComponent<TabsProps> = ({ children, id }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabItemsRef = useRef<HTMLButtonElement[]>([]);

  const getTabItemId = (index: number) => `${id}-${index}`;
  const getTabPanelId = (index: number) => `${getTabItemId(index)}-panel`;

  const [focusedIndex, setFocusedIndex] = useState<number>(selectedTab);

  useEffect(() => {
    setFocusedIndex(selectedTab);
  }, [selectedTab]);

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const first = 0;
    const last = Children.count(children) - 1;
    const next = focusedIndex === last ? first : focusedIndex + 1;
    const prev = focusedIndex === first ? last : focusedIndex - 1;

    if (event.key === "ArrowLeft") {
      tabItemsRef.current[prev]?.focus();
      setFocusedIndex(prev);
    }

    if (event.key === "ArrowRight") {
      tabItemsRef.current[next]?.focus();
      setFocusedIndex(next);
    }

    if (event.key === "Home") {
      tabItemsRef.current[first]?.focus();
      setFocusedIndex(first);
    }

    if (event.key === "End") {
      tabItemsRef.current[last]?.focus();
      setFocusedIndex(last);
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
                type="button"
                id={getTabItemId(index)}
                active={isTabSelected}
                onClick={() => setSelectedTab(index)}
                aria-selected={isTabSelected}
                aria-controls={getTabPanelId(index)}
                tabIndex={isTabSelected ? 0 : -1}
                ref={(el) => {
                  if (el) {
                    tabItemsRef.current[index] = el;
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
              id={getTabPanelId(index)}
              aria-labelledby={getTabItemId(index)}
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
