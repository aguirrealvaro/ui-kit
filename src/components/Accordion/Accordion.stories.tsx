import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "@/components";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    title: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  return (
    <div>
      <Accordion {...args} />
      <Accordion {...args} />
      <Accordion {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: "This is an Accordion",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptatem ratione delectus laborum facilis blanditiis eaque, aspernatur saepe asperiores corrupti ullam ipsam ut quia ea ex non vitae voluptas doloribus!",
  showSeparator: true,
};
