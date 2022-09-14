import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "@/components";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Primary: ComponentStory<typeof Spinner> = () => {
  return (
    <div>
      <Spinner size="sm" color="blue" background="lightgrey" />
      <Spinner size="md" color="blue" background="lightgrey" />
      <Spinner size="lg" color="blue" background="lightgrey" />
    </div>
  );
};
