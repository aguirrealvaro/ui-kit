import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckboxNew } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/CheckboxNew",
  component: CheckboxNew,
} as ComponentMeta<typeof CheckboxNew>;

const Template: ComponentStory<typeof CheckboxNew> = ({
  onChange: _,
  checked: __,
  ...args
}) => {
  const [checked, setChecked] = useBoolean();

  return <CheckboxNew checked={checked} onChange={setChecked.toggle} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a checkbox",
  checkboxId: "checkbox-story",
  size: "md",
  helpText: "This is a helpText",
  position: "right",
};
