import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
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
    <Container>
      <NativeSelect
        //disabled
        label="Native select small"
        placeholder="Select option"
        value={option}
        options={options}
        onChange={onChange}
        clearValue={clearValue}
        helpText="Help text"
        size="sm"
      />
      <NativeSelect
        label="Native select medium"
        placeholder="Select option"
        value={option}
        options={options}
        onChange={onChange}
        clearValue={clearValue}
        helpText="Help text"
        size="md"
      />
      <NativeSelect
        label="Native select large"
        placeholder="Select option"
        value={option}
        options={options}
        onChange={onChange}
        clearValue={clearValue}
        helpText="Help text"
        size="lg"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
