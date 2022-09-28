import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Carousel } from "@/components";

export default {
  title: "Components/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const Primary: ComponentStory<typeof Carousel> = () => {
  const array = [...Array(50).keys()];

  return (
    <Carousel>
      {array.map((item, i) => (
        <Container key={i}>{item}</Container>
      ))}
    </Carousel>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey[3]};
  padding: 2px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 80px;
  border: 1px solid ${({ theme }) => theme.colors.grey[4]};
  text-align: center;
`;

export const FullWidth: ComponentStory<typeof Carousel> = () => {
  const array = [...Array(4).keys()];

  return (
    <Carousel fullWidth>
      {array.map((item, i) => (
        <FullWidthContainer key={i}>{item}</FullWidthContainer>
      ))}
    </Carousel>
  );
};

const FullWidthContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.grey[3]};
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
