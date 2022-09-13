import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { ShowMore } from "@/components";

export default {
  title: "Components/ShowMore",
  component: ShowMore,
} as ComponentMeta<typeof ShowMore>;

export const Primary: ComponentStory<typeof ShowMore> = () => {
  return (
    <Container>
      <ShowMore minHeight={200}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi, sit ex porro
        natus obcaecati eaque voluptatem! Mollitia debitis, asperiores illo, illum molestias
        aliquid omnis delectus dolor perferendis modi aspernatur? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dicta sequi, sit ex porro natus obcaecati eaque
        voluptatem! Mollitia debitis, asperiores illo, illum molestias aliquid omnis delectus
        dolor perferendis modi aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dicta sequi, sit ex porro natus obcaecati eaque voluptatem! Mollitia debitis,
        asperiores illo, illum molestias aliquid omnis delectus dolor perferendis modi
        aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi, sit
        ex porro natus obcaecati eaque voluptatem! Mollitia debitis, asperiores illo, illum
        molestias aliquid omnis delectus dolor perferendis modi aspernatur?
      </ShowMore>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
`;
