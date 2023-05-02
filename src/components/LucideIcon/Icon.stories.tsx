import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "@styled-icons/heroicons-outline/Menu";
import { Icon } from "@/components";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ icon, ...args }) => {
  return <Icon icon={Menu} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  color: "grey",
  size: 40,
};
