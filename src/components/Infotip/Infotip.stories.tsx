import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Infotip } from "@/components";

export default {
  title: "Components/Infotip",
  component: Infotip,
} as ComponentMeta<typeof Infotip>;

const Template: ComponentStory<typeof Infotip> = ({ content: dummyContent, ...args }) => {
  const content = (
    <>
      content
      <br />
      content
      <br />
      content
      <br />
      content
      <br />
      content
      <br />
      content
      <br />
    </>
  );

  return (
    <Container>
      <Infotip content={content} {...args} />
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  gap: 8,
  size: "md",
  position: "right",
  trigger: "hover",
};

const Container = styled.div`
  margin: 20px 30px;
`;
