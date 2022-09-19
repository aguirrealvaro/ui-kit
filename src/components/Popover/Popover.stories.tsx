import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Popover } from "@/components";

export default {
  title: "Components/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Primary: ComponentStory<typeof Popover> = () => {
  const content = <Content>Popver</Content>;

  return (
    <Container>
      {/* <Popover content={content} placement="top" gap={8}>
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
      </Popover> */}
      {/* <Popover content={content} placement="top-left" gap={8}>
        <Child>Hover top-left</Child>
      </Popover>
      <Popover content={content} placement="top-right" gap={8}>
        <Child>Hover top-right</Child>
      </Popover>
      <Popover content={content} placement="right-top" gap={8}>
        <Child>Hover right-top</Child>
      </Popover>
      <Popover content={content} placement="right-bottom" gap={8}>
        <Child>Hover right bottom</Child>
      </Popover> */}
      <Popover content={content} placement="bottom-left" gap={8}>
        <Child>Hover bottom-left</Child>
      </Popover>
      <Popover content={content} placement="bottom-right" gap={8}>
        <Child>Hover bottom-right</Child>
      </Popover>
      <Popover content={content} placement="left-top" gap={8}>
        <Child>Hover left-top</Child>
      </Popover>
      <Popover content={content} placement="left-bottom" gap={8}>
        <Child>Hover left-bottom</Child>
      </Popover>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  margin-left: 60px;
  display: flex;
  gap: 3rem;
`;

const Content = styled.div`
  background-color: red;
`;

const Child = styled.div`
  background-color: green;
  height: 150px;
  width: 200px;
`;
