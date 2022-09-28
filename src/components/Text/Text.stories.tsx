import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Text } from "@/components";
import { useTheme } from "@/hooks";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Primary: ComponentStory<typeof Text> = () => {
  const { theme } = useTheme();

  const breakSizes = {
    xs: "10px",
    sm: "20px",
    md: "30px",
    lg: "40px",
    xl: "50px",
  };

  return (
    <Container>
      <Text>This a parragraph (default)</Text>
      <Text upppercase>This a uppercase parragraph</Text>
      <Text color={theme.assets["primary-text"]}>This a parragraph with primary color</Text>
      <Text color={theme.assets["secondary-text"]}>
        This a parragraph with secondary color
      </Text>
      <Text size="3xl" weight="bold">
        Text 3xl
      </Text>
      <Text as="span">Span</Text>
      <Text as="span" color="blue">
        colored span
      </Text>
      <Text as="strong">Strong</Text>
      <Text as="i">Italic</Text>
      <Text as="u">Underline</Text>
      <Text as="del">Delete</Text>
      <Text as="mark">Mark</Text>
      <Text as="code">code</Text>
      <Text as="kbd">Keyboard</Text>

      <Text size={breakSizes}>This a parragraph with breakpoint sizes</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: baseline;
`;
