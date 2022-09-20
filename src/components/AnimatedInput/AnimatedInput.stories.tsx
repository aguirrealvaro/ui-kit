import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AnimatedInput } from "@/components";

export default {
  title: "Components/AnimatedInput",
  component: AnimatedInput,
} as ComponentMeta<typeof AnimatedInput>;

export const Primary: ComponentStory<typeof AnimatedInput> = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const clearValue = () => setValue("");

  return (
    <AnimatedInput
      placeholder="Placeholder"
      onChange={onChange}
      value={value}
      helpText="Help text"
      clearValue={clearValue}
      //type="password"
    />
  );
};
