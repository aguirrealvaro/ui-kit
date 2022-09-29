import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useBoolean();

  return <Checkbox checked={checked} onChange={setChecked.toggle} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a checkbox",
  position: "right",
};
