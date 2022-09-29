import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "@/components";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  return <Accordion {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: "This is an Accordion",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptatem ratione delectus laborum facilis blanditiis eaque, aspernatur saepe asperiores corrupti ullam ipsam ut quia ea ex non vitae voluptas doloribus!",
  showBorder: true,
};
