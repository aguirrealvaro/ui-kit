import { FunctionComponent, ReactNode } from "react";

type BreadcrumbsProps = {
  children: ReactNode;
};

export const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({ children }) => {
  return (
    <nav>
      <ol>{children}</ol>
    </nav>
  );
};
