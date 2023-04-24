import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccordionItemNew, AccordionGroupNew } from "@/components";

export default {
  title: "Components/AccordionGroupNew",
  component: AccordionGroupNew,
  argTypes: {
    title: {
      control: "text",
    },
  },
} as ComponentMeta<typeof AccordionGroupNew>;

const Template: ComponentStory<typeof AccordionGroupNew> = (args) => {
  return (
    <AccordionGroupNew {...args}>
      <AccordionItemNew trigger="Trigger one">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique non, rem fugiat
        officiis, quas doloremque vel architecto ullam harum tempore accusamus libero sequi
        rerum aspernatur amet tempora, cumque veniam. Magni!
      </AccordionItemNew>
      <AccordionItemNew trigger="Trigger two">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique non, rem fugiat
        officiis, quas doloremque vel architecto ullam harum tempore accusamus libero sequi
        rerum aspernatur amet tempora, cumque veniam. Magni!
      </AccordionItemNew>
      <AccordionItemNew trigger="Trigger three">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique non, rem fugiat
        officiis, quas doloremque vel architecto ullam harum tempore accusamus libero sequi
        rerum aspernatur amet tempora, cumque veniam. Magni!
      </AccordionItemNew>
    </AccordionGroupNew>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  arrowPosition: "right",
};
