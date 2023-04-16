import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/H3",
  component: Typography.H3,
} as ComponentMeta<typeof Typography.H3>;

const Template: ComponentStory<typeof Typography.H3> = (args) => {
  return <Typography.H3 {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a H3!",
};
