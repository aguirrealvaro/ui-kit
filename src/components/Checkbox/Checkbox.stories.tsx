import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Checkbox } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Primary: ComponentStory<typeof Checkbox> = () => {
  const [flag, setFlag] = useBoolean();

  return (
    <Conatiner>
      <Checkbox checked={flag} onChange={setFlag.toggle} checkboxSize="xs" />
      <Checkbox checked={flag} onChange={setFlag.toggle} checkboxSize="sm" />
      <Checkbox checked={flag} onChange={setFlag.toggle} checkboxSize="md" />
      <Checkbox checked={flag} onChange={setFlag.toggle} checkboxSize="lg" />

      <Checkbox checked={flag} onChange={setFlag.toggle} position="left">
        Children at left
      </Checkbox>
      <Checkbox checked={flag} onChange={setFlag.toggle} position="right">
        Children at right
      </Checkbox>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
