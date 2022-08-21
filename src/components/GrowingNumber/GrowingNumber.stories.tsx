import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GrowingNumber } from "@/components";

export default {
  title: "Components/GrowingNumber",
  component: GrowingNumber,
} as ComponentMeta<typeof GrowingNumber>;

export const Primary: ComponentStory<typeof GrowingNumber> = () => {
  return <GrowingNumber number="200" duration="3" />;
};
