import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Dropdown } from "@/components";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Primary: ComponentStory<typeof Dropdown> = () => {
  const content = (
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum culpa cum quisquam
      ea autem nisi, necessitatibus hic assumenda? Asperiores, distinctio possimus minima vero
      sapiente ratione fugit? Inventore et magnam impedit.
    </Content>
  );

  return <Dropdown content={content}>Click to open dropdown</Dropdown>;
};

const Content = styled.div`
  width: 250px;
`;
