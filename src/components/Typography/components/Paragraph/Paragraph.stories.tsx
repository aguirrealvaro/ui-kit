import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/Paragraph",
  component: Typography.Paragraph,
} as ComponentMeta<typeof Typography.Paragraph>;

const Template: ComponentStory<typeof Typography.Paragraph> = (args) => {
  return <Typography.Paragraph {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a Paragraph!",
  variant: "primary",
};
