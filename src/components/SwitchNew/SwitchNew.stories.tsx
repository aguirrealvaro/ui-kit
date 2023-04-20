import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SwitchNew } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/SwitchNew",
  component: SwitchNew,
} as ComponentMeta<typeof SwitchNew>;

const Template: ComponentStory<typeof SwitchNew> = ({ onChange: _, checked: __, ...args }) => {
  const [checked, setChecked] = useBoolean();

  return <SwitchNew checked={checked} onChange={setChecked.toggle} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a switch",
  switchId: "switch-story",
  size: "md",
  helpText: "This is a helpText",
  position: "left",
  disabled: true,
};
