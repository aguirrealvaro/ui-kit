import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "@/components";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card {...args}>children</Card>;
};

export const Primary = Template.bind({});
Primary.args = {
  spacing: 4,
  variant: "secondary",
};
