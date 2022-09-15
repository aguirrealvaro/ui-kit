import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Switch } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Primary: ComponentStory<typeof Switch> = () => {
  const [flag, setFlag] = useBoolean();

  return (
    <Conatiner>
      <Switch checked={flag} onChange={setFlag.toggle} switchSize="xs" />
      <Switch checked={flag} onChange={setFlag.toggle} switchSize="sm" />
      <Switch checked={flag} onChange={setFlag.toggle} switchSize="md" />
      <Switch checked={flag} onChange={setFlag.toggle} switchSize="lg" />

      <Switch checked={flag} onChange={setFlag.toggle} position="left">
        Children at left
      </Switch>
      <Switch checked={flag} onChange={setFlag.toggle} position="right">
        Children at right
      </Switch>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
