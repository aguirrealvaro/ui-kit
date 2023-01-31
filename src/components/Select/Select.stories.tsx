import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "@/components";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    helpText: {
      control: "text",
    },
    errorMessage: {
      control: "text",
    },
    successMessage: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  options: dummyOptions,
  value: dummyValue,
  onChange: dummyOnChange,
  selectId: dummySelectId,
  ...rest
}) => {
  const [option, setOption] = useState<string>("");

  const clearValue = () => {
    setOption("");
  };

  const options = [
    { label: "Option 1", value: "value1", disabled: true },
    { label: "Option 2", value: "value2", searchPattern: "kee" },
    { label: "Option 3", value: "value3", disabled: true },
    { label: "qwe", value: "value4", searchPattern: "qwe" },
    { label: "Option 5", value: "value5" },
    { label: "ui", value: "value6", searchPattern: "ui" },
    { label: "Option 7", value: "value7", disabled: true },
  ];

  return (
    <Select
      selectId="select-story"
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
  placeholder: "Placeholder",
  label: "Label:",
  helpText: "Help text",
  size: "md",
};
