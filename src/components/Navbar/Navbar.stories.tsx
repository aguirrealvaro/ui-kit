/* eslint-disable no-console */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "@/components";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => {
  return <Navbar {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  user: "Usuario",
  mainItems: [
    { label: "Item 1", onClick: () => console.log("Click"), disabled: true },
    { label: "Item 2", onClick: () => console.log("Click") },
    { label: "Item 3", onClick: () => console.log("Click") },
    { label: "Item 4", onClick: () => console.log("Click"), show: false },
    { label: "Item 5", onClick: () => console.log("Click") },
  ],
  dropdownItems: [
    { label: "Item 1", onClick: () => console.log("Click"), show: false },
    { label: "Item 2", onClick: () => console.log("Click") },
    { label: "Item 4", onClick: () => console.log("Click") },
    { label: "Item 5", onClick: () => console.log("Click"), disabled: true },
  ],
};
