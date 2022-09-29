import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "@/components";

export default {
  title: "Components/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
  return <Table {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  size: "md",
  columns: ["Name", "Age", "Address"],
  data: [
    ["Sarah Brown", 31, "100 Broadway St., New York City, New York"],
    ["Jane Smith", 32, "100 Market St., San Francisco, California"],
    ["Sarah Brown", 31, "100 Broadway St., New York City, New York"],
    ["Jane Smith", 32, "100 Market St., San Francisco, California"],
    ["Sarah Brown", 31, "100 Broadway St., New York City, New York"],
    ["Jane Smith", 32, "100 Market St., San Francisco, California"],
    ["Sarah Brown", 31, "100 Broadway St., New York City, New York"],
    ["Jane Smith", 32, "100 Market St., San Francisco, California"],
  ],
};
