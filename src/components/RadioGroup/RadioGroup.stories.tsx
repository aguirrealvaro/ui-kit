import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { RadioGroup, RadioItem } from "@/components";

export default {
  title: "Components/Radio",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = ({ onChange: _, value: __, ...args }) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      label={<LabelHeading>Radio component</LabelHeading>}
      {...args}
    >
      <RadioItem value="1" helpText="Helptext uno">
        Valor uno
      </RadioItem>
      <RadioItem value="2" helpText="Helptext dos">
        Valor dos
      </RadioItem>
      <RadioItem value="3" helpText="Helptext tres">
        Valor tres
      </RadioItem>
    </RadioGroup>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "radio-story",
};

const LabelHeading = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;
