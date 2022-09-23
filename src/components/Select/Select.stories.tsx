import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Select } from "@/components";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

export const Primary: ComponentStory<typeof Select> = () => {
  const [option, setOption] = useState<string | undefined>(undefined);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3", disabled: true },
    { label: "Option 4", value: "option4" },
  ];

  const clearValue = () => {
    setOption(undefined);
  };

  return (
    <Container>
      <Select
        label="Small"
        value={option}
        options={options}
        onChange={setOption}
        placeholder="Select option"
        helpText="Help text"
        clearValue={clearValue}
        size="sm"
      />
      <Select
        label="Medium"
        value={option}
        options={options}
        onChange={setOption}
        placeholder="Select option"
        helpText="Help text"
        clearValue={clearValue}
        size="md"
      />
      <Select
        label="Large"
        value={option}
        options={options}
        onChange={setOption}
        placeholder="Select option"
        helpText="Help text"
        clearValue={clearValue}
        size="lg"
      />
      <Select
        label="Large"
        value={option}
        options={options}
        onChange={setOption}
        placeholder="Select option"
        helpText="Help text"
        clearValue={clearValue}
        size="lg"
        disabled
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
