import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";

export default {
  title: "Components/Typography/Code",
  component: Typography.Code,
} as ComponentMeta<typeof Typography.Code>;

const Template: ComponentStory<typeof Typography.Code> = (args) => {
  return <Typography.Code {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Code!",
};
