import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Separator } from "@/components";

export default {
  title: "Components/Separator",
  component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => {
  return <Separator {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
