import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "@/components";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Primary: ComponentStory<typeof Tabs> = () => {
  const [activeKey, setActiveKey] = useState<number>(1);

  console.log(activeKey);

  return (
    <Tabs activeKey={activeKey} handleKey={setActiveKey}>
      <div>Tab panel 1</div>
      <div>Tab panel 2</div>
      <div>Tab panel 3</div>
    </Tabs>
  );
};
