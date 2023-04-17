import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/Delete",
  component: Typography.Delete,
} as ComponentMeta<typeof Typography.Delete>;

const Template: ComponentStory<typeof Typography.Delete> = (args) => {
  return <Typography.Delete {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Delete!",
};
