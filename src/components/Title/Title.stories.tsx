import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "@/components";

export default {
  title: "Components/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

export const Primary: ComponentStory<typeof Title> = () => {
  const breakpoints = {
    xs: "480px",
    sm: "768px",
    md: "992px",
    lg: "1280px",
    xl: "1440px",
  };

  const sizes1 = {
    xs: "10px",
    sm: "20px",
    md: "30px",
    lg: "40px",
    xl: "50px",
  };

  return (
    <Title as="h2" /* size="3xl" */ weight="bold" size={sizes1}>
      titulo
    </Title>
  );
};
