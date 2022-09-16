import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NumberInput } from "@/components";

export default {
  title: "Components/NumberInput",
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

export const Primary: ComponentStory<typeof NumberInput> = () => {
  const [quantity, setQuantity] = useState<number | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <NumberInput
      placeholder="Placeholder"
      onChange={onChange}
      value={quantity}
      helpText="This is a number input"
      //max={100}
      //min={1}
      //step={1}
    />
  );
};
