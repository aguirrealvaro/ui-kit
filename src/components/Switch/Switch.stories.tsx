import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Primary: ComponentStory<typeof Switch> = () => {
  const [flag, setFlag] = useBoolean();

  return <Switch checked={flag} onChange={setFlag.toggle} />;
};
