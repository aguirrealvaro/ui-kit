import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "@/components";

export default {
  title: "Components/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

export const Primary: ComponentStory<typeof Table> = () => {
  const columns = ["Name", "Age", "Address"];

  const data = [
    ["Sarah Brown", 31, "100 Broadway St., New York City, New York"],
    ["Jane Smith", 32, "100 Market St., San Francisco, California"],
    ["Sarah Brown", 31, "100 Broadway St., New York City, New York"],
    ["Jane Smith", 32, "100 Market St., San Francisco, California"],
    ["Sarah Brown", 31, "100 Broadway St., New York City, New York"],
    ["Jane Smith", 32, "100 Market St., San Francisco, California"],
    ["Sarah Brown", 31, "100 Broadway St., New York City, New York"],
    ["Jane Smith", 32, "100 Market St., San Francisco, California"],
  ];

  return <Table columns={columns} data={data} />;
};
