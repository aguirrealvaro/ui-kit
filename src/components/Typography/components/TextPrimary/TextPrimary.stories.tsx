import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/TextPrimary",
  component: Typography.TextPrimary,
} as ComponentMeta<typeof Typography.TextPrimary>;

const Template: ComponentStory<typeof Typography.TextPrimary> = (args) => {
  return <Typography.TextPrimary {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a TextPrimary!",
};
