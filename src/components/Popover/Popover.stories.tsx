import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Popover } from "@/components";

export default {
  title: "Components/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = ({ content: dummyContent, ...args }) => {
  const content = <Content>Popver</Content>;

  return (
    <Container>
      <Popover content={content} {...args}>
        <Child>Hover top</Child>
      </Popover>
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  position: "bottom-left",
  gap: 8,
  trigger: "hover",
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

const Child = styled.div`
  background-color: green;
  height: 150px;
  width: 200px;
`;
