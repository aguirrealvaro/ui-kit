import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioGroup, RadioNew } from "@/components";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = ({ onChange: _, value: __, ...args }) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <RadioGroup value={value} onChange={setValue} {...args}>
      <RadioNew value="1">Valor uno</RadioNew>
      <RadioNew value="2">Valor dos</RadioNew>
      <RadioNew value="3">Valor tres</RadioNew>
    </RadioGroup>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  radioGroupId: "radiogroup-story",
};
