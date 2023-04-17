import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/Italic",
  component: Typography.Italic,
} as ComponentMeta<typeof Typography.Italic>;

const Template: ComponentStory<typeof Typography.Italic> = (args) => {
  return <Typography.Italic {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Italic!",
};
