import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NativeSelect } from "@/components";

export default {
  title: "Components/NativeSelect",
  component: NativeSelect,
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
} as ComponentMeta<typeof NativeSelect>;

const Template: ComponentStory<typeof NativeSelect> = ({ options: dummyOptions, ...rest }) => {
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
  placeholder: "Placeholder",
  label: "Label:",
  helpText: "Help text",
  size: "md",
  isLoading: false,
};
