import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Popper } from "@/components";

export default {
  title: "Components/Popper",
  component: Popper,
} as ComponentMeta<typeof Popper>;

const Template: ComponentStory<typeof Popper> = ({ trigger: dummyTrigger, ...args }) => {
  return (
    <Container>
      <Popper trigger={<Trigger>Hover</Trigger>} {...args}>
        <Content>Popper</Content>
      </Popper>
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "popper-story",
  position: "bottom-left",
  gap: 8,
  triggerMode: "hover",
  withTriggerWidth: false,
};

const Container = styled.div`
  margin-top: 50px;
  margin-left: 60px;
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const Content = styled.div`
  background-color: red;
`;

const Trigger = styled.span`
  background-color: green;
  height: 150px;
  width: 200px;
`;
