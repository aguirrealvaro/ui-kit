import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/H4",
  component: Typography.H4,
} as ComponentMeta<typeof Typography.H4>;

const Template: ComponentStory<typeof Typography.H4> = (args) => {
  return <Typography.H4 {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a H4!",
};
