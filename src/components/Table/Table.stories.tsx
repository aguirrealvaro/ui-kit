import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "@/components";

export default {
  title: "Components/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

export const Primary: ComponentStory<typeof Table> = () => {
  return <Table />;
};
