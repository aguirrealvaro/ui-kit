import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "@styled-icons/heroicons-outline/Menu";
import { Close } from "@styled-icons/ionicons-outline/Close";
import styled from "styled-components";
import { IconButton, Icon } from "@/components";

export default {
  title: "Components/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const Primary: ComponentStory<typeof IconButton> = () => {
  return (
    <Container>
      <IconButton>
        <Icon icon={Menu} size={17} />
      </IconButton>
      <IconButton>
        <Icon icon={Close} size={50} />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: baseline;
`;
