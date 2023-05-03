import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Infotip } from "@/components";

export default {
  title: "Components/Infotip",
  component: Infotip,
} as ComponentMeta<typeof Infotip>;

const Template: ComponentStory<typeof Infotip> = ({ ...args }) => {
  return (
    <Container>
      <Infotip {...args}>This is an Infotip</Infotip>
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "infotip-story",
  gap: 8,
  size: "md",
  position: "right",
  triggerMode: "hover",
};

const Container = styled.div`
  margin: 20px 30px;
`;
