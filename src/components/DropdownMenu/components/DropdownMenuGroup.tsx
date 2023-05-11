import { FunctionComponent, ReactNode } from "react";

type DropdownMenuGroup = {
  children: ReactNode;
};

export const DropdownMenuGroup: FunctionComponent<DropdownMenuGroup> = ({ children }) => {
  return <div role="group">{children}</div>;
};
