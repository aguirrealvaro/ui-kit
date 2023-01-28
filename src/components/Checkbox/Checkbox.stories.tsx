import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ onChange: _, ...args }) => {
  const [checked, setChecked] = useBoolean();

  return <Checkbox checked={checked} onChange={setChecked.toggle} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "This is a checkbox",
  size: "md",
  helpText: "This a help text explaining the action",
  position: "right",
};
