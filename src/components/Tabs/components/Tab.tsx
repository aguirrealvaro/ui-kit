import { FunctionComponent, ReactNode } from "react";

export type TabProps = {
  children: ReactNode;
  title: string;
};

export const Tab: FunctionComponent<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};
