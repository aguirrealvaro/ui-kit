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
      <Popover2 content={content} placement="top">
        <div>Hover to see base popover</div>
      </Popover2>
      <Popover2 content={content} placement="right">
        <div>Hover to see base popover</div>
      </Popover2>
      <Popover2 content={content} placement="bottom">
        <div>Hover to see base popover</div>
      </Popover2>
      <Popover2 content={content} placement="left">
        <div>Hover to see base popover</div>
      </Popover2>
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
