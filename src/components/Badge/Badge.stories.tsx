import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "@/components";

export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Badge",
  variant: "primary",
};
