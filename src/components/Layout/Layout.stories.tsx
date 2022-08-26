import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "@/components";

export default {
  title: "Components/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const Primary: ComponentStory<typeof Layout> = () => {
  return <Layout>Main</Layout>;
};
