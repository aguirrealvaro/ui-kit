import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "@/components";

export default {
  title: "Components/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
  return <Alert {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is an Alert!",
  variant: "primary",
  size: "md",
};
