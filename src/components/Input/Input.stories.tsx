import { ChangeEvent, useState } from "react";
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
    startEnhacer: {
      options: {
        icon: <span>Icon</span>,
      },
    },
    endEnhacer: {
      options: {
        icon: <span>Icon</span>,
      },
    },
    disabled: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clearValue = () => {
    setValue("");
  };

  return <Input value={value} onChange={handleChange} clearValue={clearValue} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Placeholder",
  label: "Label:",
  helpText: "Help text",
  size: "md",
  id: "input-story",
};
