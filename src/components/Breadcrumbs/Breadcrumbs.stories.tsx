import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breadcrumbs, BreadcrumbItem } from "@/components";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

export const Primary: ComponentStory<typeof Breadcrumbs> = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="#parent">Parent Page</BreadcrumbItem>
      <BreadcrumbItem href="#sub">Sub-Parent Page</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Current page</BreadcrumbItem>
    </Breadcrumbs>
  );
};
