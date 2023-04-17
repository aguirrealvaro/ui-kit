import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/InlineSecondary",
  component: Typography.InlineSecondary,
} as ComponentMeta<typeof Typography.InlineSecondary>;

const Template: ComponentStory<typeof Typography.InlineSecondary> = (args) => {
  return <Typography.InlineSecondary {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a InlineSecondary!",
};
