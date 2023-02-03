import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "@/components";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ content: dummyContact, ...args }) => {
  const content = (
    <>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum culpa cum quisquam
      ea autem nisi, necessitatibus hic assumenda? Asperiores, distinctio possimus minima vero
      sapiente ratione fugit? Inventore et magnam impedit.
    </>
  );

  return (
    <Dropdown content={content} {...args}>
      <button>click me</button>
    </Dropdown>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  position: "bottom-left",
  gap: 16,
  trigger: "click",
  withTriggerWidth: false,
};
