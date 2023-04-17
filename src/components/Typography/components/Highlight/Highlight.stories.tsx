import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/Highlight",
  component: Typography.Highlight,
} as ComponentMeta<typeof Typography.Highlight>;

const Template: ComponentStory<typeof Typography.Highlight> = (args) => {
  return <Typography.Highlight {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Highlight!",
};
