import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BreadcrumbGroup, BreadcrumbItem } from "@/components";

export default {
  title: "Components/Breadcrumb",
  component: BreadcrumbGroup,
} as ComponentMeta<typeof BreadcrumbGroup>;

const Template: ComponentStory<typeof BreadcrumbGroup> = () => {
  return (
    <BreadcrumbGroup>
      <BreadcrumbItem href="#parent">Parent Page</BreadcrumbItem>
      <BreadcrumbItem href="#sub">Sub-Parent Page</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Current page</BreadcrumbItem>
    </BreadcrumbGroup>
  );
};

export const Primary = Template.bind({});
