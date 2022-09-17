import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Popover } from "@/components";

export default {
  title: "Components/Popover2",
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Primary: ComponentStory<typeof Popover> = () => {
  const content = <Content>Popver</Content>;

  return (
    <Container>
      <Popover content={content} placement="top" gap={8}>
        <Child>Hover top</Child>
      </Popover>
      <Popover content={content} placement="right" gap={8}>
        <Child>Hover right</Child>
      </Popover>
      <Popover content={content} placement="bottom" gap={8}>
        <Child>Hover bottom</Child>
      </Popover>
      <Popover content={content} placement="left" gap={8}>
        <Child>Hover left</Child>
      </Popover>
    </Container>
  );
};

const Container = styled.div`
  margin: 200px 250px;
  display: flex;
  gap: 3rem;
`;

const Content = styled.div`
  background-color: red;
`;

const Child = styled.div`
  background-color: green;
  height: 150px;
`;
