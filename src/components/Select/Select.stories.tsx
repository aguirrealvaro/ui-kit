import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "@/components";
import { SelectFieldType } from "@/components/Select/Select.types";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  options: dummyOptions,
  value: dummyValue,
  onChange: dummyOnChange,
  ...rest
}) => {
  const [option, setOption] = useState<string>("");

  const clearValue = () => {
    setOption("");
  };

  const options: SelectFieldType[] = [
    { label: "qWe", value: "value1", disabled: false },
    { label: "Option 2", value: "value2", searchPattern: "pattern" },
    { label: "Option 3", value: "value3", disabled: true },
    { label: "we", value: "value4" },
    { label: "zxc", value: "value5" },
    { label: "qwe zxc", value: "value6" },
    { label: "Option 7", value: "value7", disabled: true },
  ];

  return (
    <Select
      value={option}
      clearValue={clearValue}
      onChange={setOption}
      options={options}
      {...rest}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "select-story",
  placeholder: "Placeholder",
  label: "Label:",
  helpMessage: "help message",
  size: "md",
};
