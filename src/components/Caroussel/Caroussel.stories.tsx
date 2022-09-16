import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Caroussel } from "@/components";

export default {
  title: "Components/Caroussel",
  component: Caroussel,
} as ComponentMeta<typeof Caroussel>;

export const Primary: ComponentStory<typeof Caroussel> = () => {
  const array = [...Array(50).keys()];

  return (
    <Caroussel>
      {array.map((item, i) => (
        <Container key={i}>{item}</Container>
      ))}
    </Caroussel>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 2px 20px;
  border-radius: 10px;
  width: 80px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  text-align: center;
`;