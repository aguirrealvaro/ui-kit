import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/TextSecondary",
  component: Typography.TextSecondary,
} as ComponentMeta<typeof Typography.TextSecondary>;

const Template: ComponentStory<typeof Typography.TextSecondary> = (args) => {
  return <Typography.TextSecondary {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a TextSecondary!",
};
