import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AnimatedInput } from "@/components";

export default {
  title: "Components/AnimatedInput",
  component: AnimatedInput,
  argTypes: {
    label: {
      control: "text",
    },
    helpText: {
      control: "text",
    },
    errorMessage: {
      control: "text",
    },
    successMessage: {
      control: "text",
    },
    icon: {
      options: {
        icon: <span>Icon</span>,
      },
    },
    disabled: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof AnimatedInput>;

const Template: ComponentStory<typeof AnimatedInput> = (args) => <AnimatedInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Placeholder",
  helpText: "Help text",
};
