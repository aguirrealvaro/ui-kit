import { AnchorHTMLAttributes, FunctionComponent } from "react";
import { Link, LinkProps } from "@/components";

type BreadcrumbItemProps = {
  isCurrentPage?: boolean;
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const BreadcrumbItem: FunctionComponent<BreadcrumbItemProps> = ({
  children,
  isCurrentPage = false,
  ...restProps
}) => {
  if (isCurrentPage) return <span aria-current="page">{children}</span>;

  return <Link {...restProps}>{children}</Link>;
};

export { BreadcrumbItem, type BreadcrumbItemProps };
