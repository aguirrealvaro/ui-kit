import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/Bold",
  component: Typography.Bold,
} as ComponentMeta<typeof Typography.Bold>;

const Template: ComponentStory<typeof Typography.Bold> = (args) => {
  return <Typography.Bold {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Bold!",
};
