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
        Hover to see base popover
      </Popover2>
      <Popover2 content={content} placement="right">
        Hover to see base popover
      </Popover2>
      <Popover2 content={content} placement="bottom">
        Hover to see base popover
      </Popover2>
      <Popover2 content={content} placement="left">
        Hover to see base popover
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
