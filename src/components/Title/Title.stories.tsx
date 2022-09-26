import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "@/components";

export default {
  title: "Components/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

export const Primary: ComponentStory<typeof Title> = () => {
  return (
    <Title as="h2" size="xxxl" weight="bold">
      titulo
    </Title>
  );
};
