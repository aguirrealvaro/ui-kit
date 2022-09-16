import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NumberInput } from "@/components";

export default {
  title: "Components/NumberInput",
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

export const Primary: ComponentStory<typeof NumberInput> = () => {
  const [name, setName] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return (
    <NumberInput
      placeholder="Placeholder"
      onChange={onChange}
      value={name}
      helpText="Help text"
    />
  );
};
