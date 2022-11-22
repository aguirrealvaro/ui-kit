import { AnchorHTMLAttributes, FunctionComponent } from "react";
import { Link, LinkProps } from "@/components/Link";

export type BreadcrumbProps = {
  isCurrentPage?: boolean;
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({
  children,
  isCurrentPage = false,
  ...restProps
}) => {
  if (isCurrentPage) return <span>{children}</span>;

  return <Link {...restProps}>{children}</Link>;
};
