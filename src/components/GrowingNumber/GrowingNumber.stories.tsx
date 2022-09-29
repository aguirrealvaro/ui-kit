import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GrowingNumber } from "@/components";

export default {
  title: "Components/GrowingNumber",
  component: GrowingNumber,
} as ComponentMeta<typeof GrowingNumber>;

const Template: ComponentStory<typeof GrowingNumber> = (args) => {
  return <GrowingNumber {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  number: "200",
  duration: "2",
};
