import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Checkbox } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Primary: ComponentStory<typeof Checkbox> = () => {
  const [checked, setChecked] = useBoolean();

  return (
    <Conatiner>
      <Checkbox checked={checked} onChange={setChecked.toggle} checkboxSize="xs" />
      <Checkbox checked={checked} onChange={setChecked.toggle} checkboxSize="sm" />
      <Checkbox checked={checked} onChange={setChecked.toggle} checkboxSize="md" />
      <Checkbox checked={checked} onChange={setChecked.toggle} checkboxSize="lg" />

      <Checkbox checked={checked} onChange={setChecked.toggle} position="left">
        Children at left
      </Checkbox>
      <Checkbox checked={checked} onChange={setChecked.toggle} position="right">
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
