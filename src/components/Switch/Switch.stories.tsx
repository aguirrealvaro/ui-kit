import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({ onChange: _, checked: __, ...args }) => {
  const [checked, handleChecked] = useBoolean();

  return <Switch checked={checked} onChange={handleChecked.toggle} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a switch",
  id: "switch-story",
  size: "md",
  helpText: "This is a helpText",
  position: "left",
  disabled: false,
};
