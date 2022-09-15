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
      <Switch checked={checked} onChange={setChecked.toggle} switchSize="xs" />
      <Switch checked={checked} onChange={setChecked.toggle} switchSize="sm" />
      <Switch checked={checked} onChange={setChecked.toggle} switchSize="md" />
      <Switch checked={checked} onChange={setChecked.toggle} switchSize="lg" />

      <Switch checked={checked} onChange={setChecked.toggle} position="left">
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
