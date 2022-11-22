import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BreadcrumbGroup, Breadcrumb } from "@/components";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = () => {
  return (
    <BreadcrumbGroup>
      <Breadcrumb href="#parent">Parent Page</Breadcrumb>
      <Breadcrumb href="#sub">Sub-Parent Page</Breadcrumb>
      <Breadcrumb isCurrentPage>Current page</Breadcrumb>
    </BreadcrumbGroup>
  );
};

export const Primary = Template.bind({});
