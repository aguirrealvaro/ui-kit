import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { SVGIcon, ALL_ICONS } from "@/components/SVGIcon";

export default {
  title: "Components/SVGIcon",
  component: SVGIcon,
} as ComponentMeta<typeof SVGIcon>;

export const Primary: ComponentStory<typeof SVGIcon> = () => {
  return (
    <Container>
      {ALL_ICONS.map((icon) => (
        <SVGIcon icon={icon} key={icon} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;
