import { AnchorHTMLAttributes, FunctionComponent } from "react";
import { Link, LinkProps } from "@/components/Link";

export type BreadcrumbItemProps = {
  isCurrentPage?: boolean;
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const BreadcrumbItem: FunctionComponent<BreadcrumbItemProps> = ({
  children,
  isCurrentPage = false,
  ...restProps
}) => {
  if (isCurrentPage) return <span>{children}</span>;

  return <Link {...restProps}>{children}</Link>;
};
