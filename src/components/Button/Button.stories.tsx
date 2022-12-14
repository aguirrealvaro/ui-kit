import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@/components";
import { useTheme } from "@/hooks";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { toggleThemeMode } = useTheme();

  return <Button onClick={toggleThemeMode} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Boton",
  kind: "solid",
  isLoading: false,
  variant: "primary",
  size: "md",
};
