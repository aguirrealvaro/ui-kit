import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Popover } from "@/components";

export default {
  title: "Components/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Primary: ComponentStory<typeof Popover> = () => {
  const content = <div style={{ background: "red" }}>soy un contenido cualquiera</div>;

  return (
    <Container>
      <Popover content={content} placement="bottom">
        Hover to see base popover
      </Popover>
    </Container>
  );
};

const Container = styled.div`
  margin: 200px;
`;
