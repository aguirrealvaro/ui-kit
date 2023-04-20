import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VisuallyHidden } from "@/components";

export default {
  title: "Components/VisuallyHidden",
  component: VisuallyHidden,
} as ComponentMeta<typeof VisuallyHidden>;

const Template: ComponentStory<typeof VisuallyHidden> = ({ ...args }) => {
  return <VisuallyHidden {...args}>Children</VisuallyHidden>;
};

export const Primary = Template.bind({});
Primary.args = {
  as: "h3",
};
