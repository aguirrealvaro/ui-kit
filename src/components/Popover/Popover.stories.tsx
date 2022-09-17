import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Popover } from "@/components";

export default {
  title: "Components/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Primary: ComponentStory<typeof Popover> = () => {
  const content = (
    <Content>
      Lorem t amet consectetur adipisicing elit. Quod incidunt maioressint, illo recusandae
      dolore ipsum quae nulla molestias. Rem, volipsum dolor, siuptates similique aliquid
      impedit earum dolorum excepturi quos amet doloribus.
    </Content>
  );

  return (
    <Container>
      <Popover content={content} placement="right">
        Hover it
      </Popover>
    </Container>
  );
};

const Content = styled.div`
  max-width: 150px;
  word-wrap: break-word;
  white-space: normal;
`;

const Container = styled.div`
  margin: 200px;
`;
