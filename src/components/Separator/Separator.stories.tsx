import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Separator } from "@/components";

export default {
  title: "Components/Separator",
  component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => {
  return (
    <Container>
      <p>First parragraph</p>
      <Separator {...args} />
      <p>Second parragraph</p>
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  orientation: "horizontal",
  spacing: 4,
};

const Container = styled.div`
  display: flex;
  // flex-direction: row; // vertical
  flex-direction: column; // horizontal
`;
