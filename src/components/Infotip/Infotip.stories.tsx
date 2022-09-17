import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Infotip } from "@/components";

export default {
  title: "Components/Infotip",
  component: Infotip,
} as ComponentMeta<typeof Infotip>;

export const Primary: ComponentStory<typeof Infotip> = () => {
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
      <Infotip content={content} placement="right" size={"xs"} />
      <Infotip content={content} placement="right" size={"sm"} />
      <Infotip content={content} placement="right" size={"md"} />
      <Infotip content={content} placement="right" size={"lg"} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin: 200px;
`;
