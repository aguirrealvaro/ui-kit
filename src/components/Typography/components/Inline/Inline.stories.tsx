import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/Inline",
  component: Typography.Inline,
} as ComponentMeta<typeof Typography.Inline>;

const Template: ComponentStory<typeof Typography.Inline> = (args) => {
  return <Typography.Inline {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a Inline!",
  variant: "primary",
};
