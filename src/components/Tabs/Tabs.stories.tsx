import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs, Tab } from "@/components";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  return (
    <Tabs {...args}>
      <Tab title="Title 1">Panel 1</Tab>
      <Tab title="Title 2">Panel 2</Tab>
      <Tab title="Title 3">Panel 3</Tab>
      <Tab title="Title 4">Panel 4</Tab>
      <Tab title="Title 5">Panel 5</Tab>
      <Tab title="Title 6">Panel 6</Tab>
      <Tab title="Title 7">Panel 7</Tab>
    </Tabs>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "tabs-story",
};
