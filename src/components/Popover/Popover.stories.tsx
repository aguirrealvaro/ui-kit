import { ComponentStory, ComponentMeta } from "@storybook/react";
import { User } from "lucide-react";
import { Icon, IconButton, Popover } from "@/components";

export default {
  title: "Components/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = ({ trigger: dummyTrigger, ...args }) => {
  const trigger = (
    <IconButton>
      <Icon icon={User} />
    </IconButton>
  );

  return (
    <Popover trigger={trigger} {...args}>
      Hola!
    </Popover>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "popover",
  position: "bottom",
  gap: 8,
  triggerMode: "click",
};
