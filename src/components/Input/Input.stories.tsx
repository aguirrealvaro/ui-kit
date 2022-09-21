import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Search } from "@styled-icons/evaicons-solid/Search";
import styled from "styled-components";
import { theme } from "../App";
import { Input, Icon } from "@/components";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const clearValue = () => setValue("");

  const searchIcon = <Icon icon={Search} color={theme.colors.grey} size={20} />;

  return (
    <Container>
      <Input
        inputId="input1"
        label="Label"
        placeholder="Small"
        onChange={onChange}
        value={value}
        helpText="Help text"
        clearValue={clearValue}
        rightIcon={searchIcon}
        size="sm"
      />
      <Input
        inputId="input2"
        label="Label"
        placeholder="Medium"
        onChange={onChange}
        value={value}
        helpText="Help text"
        clearValue={clearValue}
        size="md"
      />
      <Input
        inputId="input3"
        label="Label"
        placeholder="Large"
        onChange={onChange}
        value={value}
        helpText="Help text"
        clearValue={clearValue}
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
