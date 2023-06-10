import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioGroup, RadioItem } from "@/components";

export default {
  title: "Components/Radio",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = ({ onChange: _, value: __, ...args }) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <RadioGroup value={value} onChange={setValue} {...args}>
      <RadioItem value="1">Valor uno</RadioItem>
      <RadioItem value="2" disabled>
        Valor dos
      </RadioItem>
      <RadioItem value="3">Valor tres</RadioItem>
      <RadioItem value="4">Valor cuatro</RadioItem>
      <RadioItem value="5">Valor cinco</RadioItem>
      <RadioItem value="7" disabled>
        Valor cinco
      </RadioItem>
      <RadioItem value="8" disabled>
        Valor cinco
      </RadioItem>
    </RadioGroup>
  );
};

export const Primary = Template.bind({});
