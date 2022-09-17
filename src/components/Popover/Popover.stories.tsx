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
      <Popover content={content} placement="top">
        <div>Hover to see base popover</div>
      </Popover>
      <Popover content={content} placement="right">
        <div>Hover to see base popover</div>
      </Popover>
      <Popover content={content} placement="bottom">
        <div>Hover to see base popover</div>
      </Popover>
      <Popover content={content} placement="left">
        <div>Hover to see base popover</div>
      </Popover>
    </Container>
  );
};

const Container = styled.div`
  margin: 200px;
  display: flex;
  gap: 3rem;
`;

const Content = styled.div`
  background-color: red;
`;
