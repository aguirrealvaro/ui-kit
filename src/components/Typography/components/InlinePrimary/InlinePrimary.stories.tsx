import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/InlinePrimary",
  component: Typography.InlinePrimary,
} as ComponentMeta<typeof Typography.InlinePrimary>;

const Template: ComponentStory<typeof Typography.InlinePrimary> = (args) => {
  return <Typography.InlinePrimary {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a InlinePrimary!",
};
