import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Popover2 } from "@/components";

export default {
  title: "Components/Popover2",
  component: Popover2,
} as ComponentMeta<typeof Popover2>;

export const Primary: ComponentStory<typeof Popover2> = () => {
  const content = <Content>Popver</Content>;

  return (
    <Container>
      {/* <Popover2 content={content} placement="top" gap={8}>
        <Child>Hover top</Child>
      </Popover2> */}
      {/* <Popover2 content={content} placement="right" gap={8}>
        <Child>Hover right</Child>
      </Popover2> */}
      <Popover2 content={content} placement="bottom" gap={8}>
        <Child>Hover bottom</Child>
      </Popover2>
      {/* <Popover2 content={content} placement="left" gap={8}>
        <Child>Hover left</Child>
      </Popover2> */}
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
