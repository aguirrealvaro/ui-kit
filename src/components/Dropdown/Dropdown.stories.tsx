import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DropdownGroup, DropdownItem } from "./components";
import { Dropdown, Separator } from "@/components";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ trigger: dummyTrigger, ...args }) => {
  return (
    <Dropdown trigger={<button>click me</button>} {...args}>
      <DropdownGroup>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 1</DropdownItem>
      </DropdownGroup>
      <Separator />
      <DropdownGroup>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 1</DropdownItem>
      </DropdownGroup>
    </Dropdown>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "dropdown-story",
  position: "bottom-left",
  gap: 16,
  triggerMode: "click",
  withTriggerWidth: false,
};
