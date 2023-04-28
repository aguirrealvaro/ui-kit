import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Masonry, Card } from "@/components";

export default {
  title: "Components/Masonry",
  component: Masonry,
} as ComponentMeta<typeof Masonry>;

const Template: ComponentStory<typeof Masonry> = (args) => {
  return (
    <Masonry {...args}>
      {[...Array(10).keys()].map((_, index) => {
        return (
          <Card key={index}>
            <InnerCard>{index}</InnerCard>
          </Card>
        );
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

const InnerCard = styled.div`
  height: ${() => getRandomItem(heights)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSizes["2xl"]};
`;
