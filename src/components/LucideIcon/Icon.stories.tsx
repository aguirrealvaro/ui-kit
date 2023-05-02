import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AlertCircle } from "lucide-react";
import { LucideIcon } from "@/components";

export default {
  title: "Components/LucideIcon",
  component: LucideIcon,
} as ComponentMeta<typeof LucideIcon>;

const Template: ComponentStory<typeof LucideIcon> = ({ icon, ...args }) => {
  return <LucideIcon icon={AlertCircle} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  color: "grey",
  size: 40,
};
