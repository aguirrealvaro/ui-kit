import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Carousel } from "@/components";

export default {
  title: "Components/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = ({ ...args }) => {
  const array = [...Array(50).keys()];

  return (
    <Carousel {...args}>
      {array.map((item, i) => (
        <Container key={i}>{item}</Container>
      ))}
    </Carousel>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey[3]};
  padding: 2px 50px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.grey[4]};
  text-align: center;
`;
