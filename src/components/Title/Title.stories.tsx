import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Title } from "@/components";

export default {
  title: "Components/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

export const Primary: ComponentStory<typeof Title> = () => {
  const breakSizes = {
    xs: "10px",
    sm: "20px",
    md: "30px",
    lg: "40px",
    xl: "50px",
  };

  return (
    <Container>
      <Title as="h1">Default</Title>
      <Title as="h1" upppercase>
        uppercase
      </Title>
      <Title as="h2" size="3xl" weight="bold">
        Title 3xl
      </Title>
      <Title as="h3" weight="bold" size={breakSizes} color="tomato">
        Title with breakpoint font sizes
      </Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
