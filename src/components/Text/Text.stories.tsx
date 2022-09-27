import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Text } from "@/components";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Primary: ComponentStory<typeof Text> = () => {
  return (
    <Container>
      <Text>Text default (md)</Text>
      <Text size="3xl" weight="bold">
        Text 3xl
      </Text>
      <Text as="span">Span</Text>
      <Text as="strong">Strong</Text>
      <i>Italic</i>
      <u>Underline</u>
      <del>Delete</del>
      <mark>mark</mark>
      <code>code</code>
      <kbd>kbd</kbd>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: baseline;
`;
