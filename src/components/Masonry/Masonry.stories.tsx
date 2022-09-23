import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Masonry } from "@/components";

export default {
  title: "Components/Masonry",
  component: Masonry,
} as ComponentMeta<typeof Masonry>;

export const Primary: ComponentStory<typeof Masonry> = () => {
  return (
    <Masonry breakpointCols={3} gap={2}>
      {[...Array(10).keys()].map((_, index) => {
        return <Card key={index}>{index}</Card>;
      })}
    </Masonry>
  );
};
const getRandomItem = (arr: number[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
};

const heights = [250, 300, 350, 400];

const Card = styled.div`
  height: ${() => getRandomItem(heights)}px;
  background-color: ${({ theme }) => theme.colors.grey[5]};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxl};
`;
