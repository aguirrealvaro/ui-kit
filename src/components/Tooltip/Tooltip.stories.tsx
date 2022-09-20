import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Tooltip } from "@/components";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Primary: ComponentStory<typeof Tooltip> = () => {
  const content = <div>This is a tooltip</div>;

  return (
    <Container>
      <Tooltip content={content} position="top" trigger="click">
        Hover top
      </Tooltip>
      {/* <Tooltip content={content} position="right">
        Hover right
      </Tooltip>
      <Tooltip content={content} position="bottom">
        Hover bottom
      </Tooltip>
      <Tooltip content={content} position="left">
        Hover left
      </Tooltip> */}
    </Container>
  );
};

const Container = styled.div`
  margin: 200px;
  display: flex;
  gap: 3rem;
`;
