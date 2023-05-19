import { useState, ChangeEvent } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NativeSelect } from "@/components";

export default {
  title: "Components/NativeSelect",
  component: NativeSelect,
} as ComponentMeta<typeof NativeSelect>;

const Template: ComponentStory<typeof NativeSelect> = ({ options: dummyOptions, ...rest }) => {
  const [option, setOption] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
      value={option}
      clearValue={clearValue}
      onChange={onChange}
      options={options}
      {...rest}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "native-select-id",
  placeholder: "Placeholder",
  label: "Label:",
  helpMessage: "help message",
  size: "md",
  isLoading: false,
};
