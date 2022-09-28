import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@/components";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ControlsButton = Template.bind({});
ControlsButton.args = {
  children: "Boton",
  kind: "solid",
  isLoading: false,
  variant: "info",
  size: "md",
};
