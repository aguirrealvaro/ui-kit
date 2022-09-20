import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AnimatedInput } from "@/components";

export default {
  title: "Components/AnimatedInput",
  component: AnimatedInput,
} as ComponentMeta<typeof AnimatedInput>;

export const Primary: ComponentStory<typeof AnimatedInput> = () => {
  const [name, setName] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return (
    <AnimatedInput
      placeholder="Placeholder"
      onChange={onChange}
      value={name}
      helpText="Help text"
    />
  );
};
