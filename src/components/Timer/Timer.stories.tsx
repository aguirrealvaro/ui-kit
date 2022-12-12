import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Timer } from "@/components";

export default {
  Timer: "Components/Timer",
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => {
  return <Timer {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
