import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Dropdown } from "@/components";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ trigger: dummyTrigger, ...args }) => {
  return (
    <Dropdown trigger={<button>click me</button>} {...args}>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum culpa cum quisquam
        ea autem nisi, necessitatibus hic assumenda? Asperiores, distinctio possimus minima
        vero sapiente ratione fugit? Inventore et magnam impedit.
      </Content>
    </Dropdown>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "dropdown-story",
  position: "bottom-left",
  gap: 16,
  triggerMode: "click",
  withTriggerWidth: false,
};

const Content = styled.div`
  max-width: 15rem;
`;
