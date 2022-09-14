import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toggle } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Primary: ComponentStory<typeof Toggle> = () => {
  const [flag, setFlag] = useBoolean();

  return <Toggle checked={flag} onChange={setFlag.toggle} />;
};
