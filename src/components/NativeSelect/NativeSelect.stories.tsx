import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NativeSelect } from "@/components";

export default {
  title: "Components/NativeSelect",
  component: NativeSelect,
} as ComponentMeta<typeof NativeSelect>;

export const Primary: ComponentStory<typeof NativeSelect> = () => {
  const [option, setOption] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };

  const clearValue = () => {
    setOption("");
  };

  const options = [
    { label: "Option 1", value: "value1" },
    { label: "Option 2", value: "value2" },
    { label: "Option 3", value: "value3", disabled: true },
    { label: "Option 4", value: "value4" },
  ];

  return (
    <NativeSelect
      placeholder="Select option"
      value={option}
      options={options}
      onChange={onChange}
      clearValue={clearValue}
    />
  );
};
