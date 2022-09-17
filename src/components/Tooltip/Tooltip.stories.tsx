import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Tooltip } from "@/components";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Primary: ComponentStory<typeof Tooltip> = () => {
  const content = (
    <Content>
      Lorem t amet consectetur adipisicing elit. Quod incidunt maioressint, illo recusandae
      dolore ipsum quae nulla molestias. Rem, volipsum dolor, siuptates similique aliquid
      impedit earum dolorum excepturi quos amet doloribus.
    </Content>
  );

  return (
    <Container>
      <Tooltip content={content} placement="right">
        Hover it
      </Tooltip>
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
