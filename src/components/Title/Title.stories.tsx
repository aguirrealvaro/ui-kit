import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "@/components";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => {
  return <Title {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  size: "xl",
  upppercase: false,
  children: "This is a text!",
};
