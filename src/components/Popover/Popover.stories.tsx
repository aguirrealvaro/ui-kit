import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Popover } from "@/components";

export default {
  title: "Components/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = ({ trigger: dummyTrigger, ...args }) => {
  return (
    <Container>
      <Popover trigger={<Trigger>Hover</Trigger>} {...args}>
        <Content>Popover</Content>
      </Popover>
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "popover-story",
  position: "bottom-left",
  gap: 8,
  triggerMode: "hover",
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
