import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Tooltip } from "@/components";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = ({ trigger: dummyTrigger, ...args }) => {
  return (
    <Container>
      <Tooltip trigger={<span>Hover to see tootlip</span>} {...args}>
        This is a tooltip
      </Tooltip>
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "tooltip-story",
  position: "right",
  gap: 8,
  triggerMode: "hover",
};

const Container = styled.div`
  margin-top: 50px;
  margin-left: 60px;
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
`;
