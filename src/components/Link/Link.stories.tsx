import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Link } from "@/components";

export default {
  title: "Components/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

export const Primary: ComponentStory<typeof Link> = () => {
  return (
    <Container>
      <Link href="https://www.google.com.ar/">Link</Link>
      <Link href="https://www.google.com.ar/" disabled>
        Link
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
