import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "@/components";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Primary: ComponentStory<typeof Spinner> = () => {
  return (
    <div>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  );
};
