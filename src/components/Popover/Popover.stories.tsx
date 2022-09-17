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
        Hover to see base popover
      </Popover>
    </Container>
  );
};

const Container = styled.div`
  margin: 200px;
  background-color: red;
  display: inline-block;
`;

const Content = styled.div`
  background-color: red;
`;
