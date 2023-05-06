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
      <RadioItem value="1" helpText="Helptext uno">
        Valor uno
      </RadioItem>
      <RadioItem value="2" helpText="Helptext dos" disabled>
        Valor dos
      </RadioItem>
      <RadioItem value="3" helpText="Helptext tres">
        Valor tres
      </RadioItem>
      <RadioItem value="4" helpText="Helptext tres">
        Valor cuatro
      </RadioItem>
      <RadioItem value="5" helpText="Helptext tres">
        Valor cinco
      </RadioItem>
      <RadioItem value="6" helpText="Helptext tres" disabled>
        Valor cinco
      </RadioItem>
      <RadioItem value="7" helpText="Helptext tres">
        Valor cinco
      </RadioItem>
      <RadioItem value="8" helpText="Helptext tres" disabled>
        Valor cinco
      </RadioItem>
    </RadioGroup>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "radio-story",
};
