import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextInput } from "@/components";

export default {
  title: "Components/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Primary: ComponentStory<typeof TextInput> = () => {
  const [name, setName] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return (
    <TextInput
      placeholder="Placeholder"
      onChange={onChange}
      value={name}
      helpText="Help text"
      //isLoading
    />
  );
};
