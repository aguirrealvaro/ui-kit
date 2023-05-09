import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@/components";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Boton",
  variant: "primary",
  isLoading: false,
  colorScheme: "grey",
  size: "md",
  disabled: false,
};
