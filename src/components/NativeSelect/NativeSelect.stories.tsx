import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NativeSelect } from "@/components";

export default {
  title: "Components/NativeSelect",
  component: NativeSelect,
} as ComponentMeta<typeof NativeSelect>;

export const Primary: ComponentStory<typeof NativeSelect> = () => {
  const [option, setOption] = useState<string | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3", disabled: true },
    { label: "Option 4", value: "option4" },
  ];

  return (
    <NativeSelect
      placeholder="Select option"
      value={option}
      options={options}
      onChange={onChange}
    />
  );
};
