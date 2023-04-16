import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/H1",
  component: Typography.H1,
} as ComponentMeta<typeof Typography.H1>;

const Template: ComponentStory<typeof Typography.H1> = (args) => {
  return <Typography.H1 {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a heading 1!",
};
