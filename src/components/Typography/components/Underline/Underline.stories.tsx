import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/Underline",
  component: Typography.Underline,
} as ComponentMeta<typeof Typography.Underline>;

const Template: ComponentStory<typeof Typography.Underline> = (args) => {
  return <Typography.Underline {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Underline!",
};
