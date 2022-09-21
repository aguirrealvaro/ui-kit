import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Switch } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Primary: ComponentStory<typeof Switch> = () => {
  const [checked, setChecked] = useBoolean();

  return (
    <Conatiner>
      <Switch checked={checked} onChange={setChecked.toggle} size="xs" disabled />
      <Switch checked={checked} onChange={setChecked.toggle} size="sm" />
      <Switch checked={checked} onChange={setChecked.toggle} size="md" />
      <Switch checked={checked} onChange={setChecked.toggle} size="lg" />

      <Switch checked={checked} onChange={setChecked.toggle} position="left" disabled>
        Input at left
      </Switch>
      <Switch checked={checked} onChange={setChecked.toggle} position="right">
        Input at right
      </Switch>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
