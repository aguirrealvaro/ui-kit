import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({ onChange: _, ...args }) => {
  const [checked, setChecked] = useBoolean();

  return <Switch checked={checked} onChange={setChecked.toggle} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a switch",
  size: "md",
  helpText: "This is a helpText",
  position: "left",
};
