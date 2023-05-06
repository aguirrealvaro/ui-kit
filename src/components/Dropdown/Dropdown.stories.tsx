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
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </DropdownGroup>
      <Separator preSpacing={1} postSpacing={1} />
      <DropdownGroup>
        <DropdownItem>Item 4</DropdownItem>
        <DropdownItem>Item 5</DropdownItem>
        <DropdownItem>Item 6</DropdownItem>
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
