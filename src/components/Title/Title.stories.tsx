import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "@/components";
import { useTheme } from "@/hooks";

export default {
  title: "Components/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

export const Primary: ComponentStory<typeof Title> = () => {
  const { theme } = useTheme();

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

  const sizes2 = {
    xl: "50px",
    lg: "40px",
    md: "30px",
    sm: "20px",
    xs: "10px",
  };

  return (
    <Title as="h2" /* size="xxxl" */ weight="bold" size={sizes1}>
      titulo
    </Title>
  );
};
