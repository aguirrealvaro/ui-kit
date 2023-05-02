import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "@/components";

export default {
  title: "Components/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {
  return <Link {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a link",
  underline: "hover",
  href: "https://google.com",
};
