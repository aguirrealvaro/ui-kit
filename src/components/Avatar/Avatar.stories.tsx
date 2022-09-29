import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "@/components";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  src: "https://bit.ly/dan-abramov",
  size: "md",
  name: "Dan Abramov",
  shape: "circle",
};
