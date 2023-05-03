import { FunctionComponent, ReactNode } from "react";

type DropdownMenuProps = {
  children: ReactNode;
};

export const DropdownGroup: FunctionComponent<DropdownMenuProps> = ({ children }) => {
  return <div role="group">{children}</div>;
};
