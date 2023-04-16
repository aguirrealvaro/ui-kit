import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/H2",
  component: Typography.H2,
} as ComponentMeta<typeof Typography.H2>;

const Template: ComponentStory<typeof Typography.H2> = (args) => {
  return <Typography.H2 {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a H2!",
  fontSize: "",
};
