import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "lucide-react";
import { IconButton, Icon } from "@/components";

export default {
  title: "Components/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <IconButton {...args}>
      <Icon icon={Menu} size={25} />
    </IconButton>
  );
};

export const Primary = Template.bind({});
