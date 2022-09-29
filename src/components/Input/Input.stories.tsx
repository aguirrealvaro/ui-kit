import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "@/components";

export default {
  title: "Components/Input",
  component: Input,
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
    leftIcon: {
      options: {
        icon: <span>Icon</span>,
      },
    },
    rightIcon: {
      options: {
        icon: <span>Icon</span>,
      },
    },
    disabled: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label:",
  helpText: "Help text",
  size: "md",
};
