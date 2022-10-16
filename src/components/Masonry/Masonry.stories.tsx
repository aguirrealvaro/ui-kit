import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Masonry } from "@/components";

export default {
  title: "Components/Masonry",
  component: Masonry,
} as ComponentMeta<typeof Masonry>;

const Template: ComponentStory<typeof Masonry> = (args) => {
  return (
    <Masonry {...args}>
      {[...Array(10).keys()].map((_, index) => {
        return <Card key={index}>{index}</Card>;
      })}
    </Masonry>
  );
};

/* const breakpointCols = {
  default: 3,
  768: 2,
  600: 1,
}; */

export const Primary = Template.bind({});
Primary.args = {
  breakpointCols: 3,
  gap: 2,
};

const heights = [250, 300, 350, 400];

const getRandomItem = (arr: number[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
};

const Card = styled.div`
  height: ${() => getRandomItem(heights)}px;
  background-color: ${({ theme }) => theme.colors.grey[3]};
  color: ${({ theme }) => theme.assets.textPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSizes["2xl"]};
`;
