import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs, Tab } from "@/components";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Primary: ComponentStory<typeof Tabs> = () => {
  return (
    <Tabs>
      <Tab title="Title 1">Panel 1</Tab>
      <Tab title="Title 2">Panel 2</Tab>
      <Tab title="Title 3">Panel 3</Tab>
    </Tabs>
  );
};
