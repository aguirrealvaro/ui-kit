import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "@styled-icons/heroicons-outline/Menu";
import { IconButton, Icon } from "@/components";

export default {
  title: "Components/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <IconButton {...args}>
      <Icon icon={Menu} size={40} />
    </IconButton>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: "grey",
  withHover: true,
};
