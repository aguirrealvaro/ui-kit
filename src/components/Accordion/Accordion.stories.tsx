import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccordionItem, AccordionGroup } from "@/components";

export default {
  title: "Components/Accordion",
  component: AccordionGroup,
  argTypes: {
    title: {
      control: "text",
    },
  },
} as ComponentMeta<typeof AccordionGroup>;

const Template: ComponentStory<typeof AccordionGroup> = (args) => {
  return (
    <AccordionGroup {...args}>
      <AccordionItem title="This is an Accordion one">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique non, rem fugiat
        officiis, quas doloremque vel architecto ullam harum tempore accusamus libero sequi
        rerum aspernatur amet tempora, cumque veniam. Magni! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Similique non, rem fugiat officiis, quas doloremque vel
        architecto ullam harum tempore accusamus libero sequi rerum aspernatur amet tempora,
        cumque veniam. Magni!
      </AccordionItem>
      <AccordionItem title="Title two">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique non, rem fugiat
        officiis, quas doloremque vel architecto ullam harum tempore accusamus libero sequi
        rerum aspernatur amet tempora, cumque veniam. Magni!
      </AccordionItem>
      <AccordionItem title="Title three">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique non, rem fugiat
        officiis, quas doloremque vel architecto ullam harum tempore accusamus libero sequi
        rerum aspernatur amet tempora, cumque veniam. Magni!
      </AccordionItem>
    </AccordionGroup>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "story",
  arrowPosition: "right",
};
