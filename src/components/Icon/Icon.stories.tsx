import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AlertCircle } from "lucide-react";
import { Icon } from "@/components";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ icon, ...args }) => {
  return <Icon icon={AlertCircle} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  color: "grey",
  size: 40,
};
