import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Italic } from "lucide-react";
import { Toggle, Icon } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = () => {
  const [checked, handleChecked] = useBoolean();

  return (
    <Toggle isChecked={checked} onToggle={handleChecked.toggle}>
      <Icon icon={Italic} />
    </Toggle>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
