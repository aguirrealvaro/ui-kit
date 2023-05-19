import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ onChange: _, checked: __, ...args }) => {
  const [checked, handleChecked] = useBoolean();

  return <Checkbox checked={checked} onChange={handleChecked.toggle} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a checkbox",
  id: "checkbox-story",
  size: "md",
  helpMessage: "This is a help message",
  position: "left",
  disabled: false,
};
