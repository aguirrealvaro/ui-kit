import { FunctionComponent, ReactNode } from "react";

type ListProps = {
  children: ReactNode;
};

export const List: FunctionComponent<ListProps> = ({ children }) => {
  return <ul>{children}</ul>;
};
