import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PopoverNew, Button } from "@/components";

export default {
  title: "Components/PopoverNew",
  component: PopoverNew,
} as ComponentMeta<typeof PopoverNew>;

const Template: ComponentStory<typeof PopoverNew> = ({ trigger: dummyTrigger, ...args }) => {
  return (
    <PopoverNew trigger={<Button>Click</Button>} {...args}>
      Hola!
    </PopoverNew>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "popover",
  position: "right",
  gap: 8,
  triggerMode: "click",
};
