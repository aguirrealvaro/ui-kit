import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioGroup, Radio } from "@/components";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = ({ onChange: _, value: __, ...args }) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <RadioGroup value={value} onChange={setValue} {...args}>
      <Radio value="1" /* helpText="Helptext uno" */>Valor uno</Radio>
      <Radio value="2" /* helpText="Helptext dos" */>Valor dos</Radio>
      <Radio value="3" /* helpText="Helptext tres" */>Valor tres</Radio>
    </RadioGroup>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  radioGroupId: "radiogroup-story",
};
