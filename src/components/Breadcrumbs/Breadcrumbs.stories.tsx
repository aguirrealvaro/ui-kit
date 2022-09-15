import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breadcrumbs, Link } from "@/components";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

export const Primary: ComponentStory<typeof Breadcrumbs> = () => {
  return (
    <Breadcrumbs>
      <Link href="#parent">Parent Page</Link>
      <Link href="#sub">Sub-Parent Page</Link>
      <span>Current page</span>
    </Breadcrumbs>
  );
};
