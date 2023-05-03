import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Popover } from "@/components";

export default {
  title: "Components/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = ({ content: dummyContent, ...args }) => {
  const content = <Content>Popover</Content>;

  return (
    <Container>
      <Popover content={content} {...args}>
        <Trigger>Hover</Trigger>
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
