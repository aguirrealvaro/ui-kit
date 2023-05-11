import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Popover } from "@/components";

export default {
  title: "Components/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = ({ trigger: dummyTrigger, ...args }) => {
  return (
    <Popover trigger={<button>Click</button>} {...args}>
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
