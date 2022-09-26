import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Avatar } from "@/components";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Primary: ComponentStory<typeof Avatar> = () => {
  return (
    <Container>
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov" size="xs" />
      <Avatar src="errorpath" name="Dan Abramov" size="sm" />
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov" size="md" />
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov" size="lg" />
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov" size="xl" />
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov " size="2xl" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
