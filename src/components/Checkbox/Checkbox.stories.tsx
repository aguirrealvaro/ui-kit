import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Checkbox, CheckboxGroup } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ onChange: _, checked: __, ...args }) => {
  const [checked, setChecked] = useBoolean();

  return (
    <CheckboxGroup
      id="checkbox-group-story"
      label={<LabelHeading>Radio component</LabelHeading>}
    >
      <Checkbox checked={checked} onChange={setChecked.toggle} {...args} />
    </CheckboxGroup>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a checkbox",
  id: "checkbox-story",
  size: "md",
  helpText: "This is a helpText",
  position: "left",
};

const LabelHeading = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;
