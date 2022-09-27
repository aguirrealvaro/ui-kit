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
      <Text>This a parragraph (default)</Text>
      <Text size="3xl" weight="bold">
        Text 3xl
      </Text>
      <Text as="span">Span</Text>
      <Text as="strong">Strong</Text>
      <Text as="i">Italic</Text>
      <Text as="u">Underline</Text>
      <Text as="del">Delete</Text>
      <Text as="mark">Mark</Text>
      <Text as="code">code</Text>
      <Text as="kbd">Keyboard</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: baseline;
`;
