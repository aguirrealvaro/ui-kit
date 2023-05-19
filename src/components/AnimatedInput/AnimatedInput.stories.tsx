import { ChangeEvent, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AnimatedInput } from "@/components";

export default {
  title: "Components/AnimatedInput",
  component: AnimatedInput,
} as ComponentMeta<typeof AnimatedInput>;

const Template: ComponentStory<typeof AnimatedInput> = (args) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clearValue = () => {
    setValue("");
  };
  return (
    <AnimatedInput value={value} onChange={handleChange} clearValue={clearValue} {...args} />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Placeholder",
  helpMessage: "help message",
  type: "text",
};
