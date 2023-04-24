import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabGroup, TabItem } from "@/components";

export default {
  title: "Components/Tabs",
  component: TabGroup,
} as ComponentMeta<typeof TabGroup>;

const Template: ComponentStory<typeof TabGroup> = (args) => {
  return (
    <TabGroup label={<h3>List of tabs</h3>} {...args}>
      <TabItem trigger="Title 1">Panel 1</TabItem>
      <TabItem trigger="Title 2">Panel 2</TabItem>
      <TabItem trigger="Title 3">Panel 3</TabItem>
      <TabItem trigger="Title 4">Panel 4</TabItem>
      <TabItem trigger="Title 5">Panel 5</TabItem>
      <TabItem trigger="Title 6">Panel 6</TabItem>
      <TabItem trigger="Title 7">Panel 7</TabItem>
    </TabGroup>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "tabs-story",
};
