import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Tooltip } from "@/components";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = ({ content: dummyContent, ...args }) => {
  const content = <div>This is a Tooltip</div>;

  return (
    <Container>
      <Tooltip content={content} {...args}>
        Hover
      </Tooltip>
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  position: "right",
  gap: 8,
  trigger: "hover",
  withTriggerWidth: false,
};

const Container = styled.div`
  margin-top: 50px;
  margin-left: 60px;
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
`;
