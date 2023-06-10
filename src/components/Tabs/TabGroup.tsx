import {
  FunctionComponent,
  Children,
  ReactNode,
  useState,
  isValidElement,
  KeyboardEvent,
  useRef,
  useId,
} from "react";
import styled, { css } from "styled-components";
import { TabItemProps } from "./TabItem";

type TabGroupProps = {
  children: ReactNode;
};

const TabGroup: FunctionComponent<TabGroupProps> = ({ children }) => {
  const id = useId();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabsRef = useRef<HTMLButtonElement[]>([]);

  const getTabItemId = (index: number) => `${id}-${index}`;
  const getTabPanelId = (index: number) => `${getTabItemId(index)}-panel`;

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const currentIndex = tabsRef.current.findIndex((tab) => tab === document.activeElement);

    const first = 0;
    const last = tabsRef.current.length - 1;
    const prev = currentIndex === first ? last : currentIndex - 1;
    const next = currentIndex === last ? first : currentIndex + 1;

    if (event.key === "ArrowLeft") {
      tabsRef.current[prev].focus();
    }

    if (event.key === "ArrowRight") {
      tabsRef.current[next].focus();
    }

    if (event.key === "Home") {
      tabsRef.current[first].focus();
    }

    if (event.key === "End") {
      tabsRef.current[last].focus();
    }
  };

  return (
    <div>
      <TabList
        role="tablist"
        aria-orientation="horizontal"
        aria-label="List of Tabs"
        onKeyDown={handleKeyDown}
      >
        {Children.map(children, (child, index) => {
          if (!isValidElement<TabItemProps>(child)) return;

          const { title } = child.props;
          const isTabSelected = selectedTab === index;

          return (
            <TabItemWrapper role="presentation">
              <TabItem
                role="tab"
                type="button"
                id={getTabItemId(index)}
                $active={isTabSelected}
                onClick={() => setSelectedTab(index)}
                aria-selected={isTabSelected}
                aria-controls={getTabPanelId(index)}
                ref={(el) => {
                  if (el) {
                    tabsRef.current[index] = el;
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

          const { children } = child.props as TabItemProps;

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

export { TabGroup, type TabGroupProps };

const TabList = styled.ul`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.tokens.border};
  flex-wrap: wrap;
`;

const TabItemWrapper = styled.li`
  list-style: none;
`;

const TabItem = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
  ${({ $active, theme }) => {
    if ($active) {
      return css`
        color: ${theme.colors.grey.default};
        border-bottom: 2px solid ${theme.colors.grey.default};
      `;
    } else {
      return css`
        color: ${theme.tokens.textPrimary};
        border-bottom: 2px solid transparent;
      `;
    }
  }};
`;
