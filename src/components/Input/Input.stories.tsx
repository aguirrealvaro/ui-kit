import { ChangeEvent, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "@/components";

export default {
  title: "Components/Input",
  component: Input,
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
  id: "input-story",
  placeholder: "Placeholder",
  label: "Label:",
  helpMessage: "help message",
  size: "md",
};
