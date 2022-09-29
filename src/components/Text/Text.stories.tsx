import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "@/components";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  return <Text {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  size: "md",
  upppercase: false,
  children: "This is a text!",
};
