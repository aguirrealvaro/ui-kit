import { ChangeEvent, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Radio } from "@/components";

export default {
  title: "Components/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

export const Primary: ComponentStory<typeof Radio> = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Conatiner>
      <Radio
        value={"1"}
        checked={value === "1"}
        position="left"
        onChange={onChange}
        radioSize="xs"
        disabled
      >
        Input at left 1
      </Radio>
      <Radio
        value={"2"}
        checked={value === "2"}
        position="right"
        onChange={onChange}
        radioSize="sm"
      >
        Input at right 2
      </Radio>
      <Radio
        value={"3"}
        checked={value === "3"}
        position="left"
        onChange={onChange}
        radioSize="md"
      >
        Input at left 3
      </Radio>
      <Radio
        value={"4"}
        checked={value === "4"}
        position="right"
        onChange={onChange}
        radioSize="lg"
      >
        Input at right 4
      </Radio>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
