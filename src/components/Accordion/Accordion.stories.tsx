import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Accordion } from "@/components";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Primary: ComponentStory<typeof Accordion> = () => {
  return (
    <div>
      <AccordionWrapper>
        <Accordion title="Click me 1">
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit.
          Placeat maxime corporis ullam voluptate quasi amet accusamus quae at laborum! Autem
          voluptas dolorum libero laboriosam praesentium ipsa quia vero odio quidem.Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Placeat maxime corporis ullam voluptate
          quasi amet accusamus quae at laborum! Autem voluptas dolorum libero laboriosam
          praesentium ipsa quia vero odio quidem.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Placeat maxime corporis ullam voluptate quasi amet accusamus quae
          at
        </Accordion>
      </AccordionWrapper>
      <AccordionWrapper>
        <Accordion title="Click me 2">
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit.
          Placeat maxime corporis ullam voluptate quasi amet accusamus quae at laborum! Autem
          voluptas dolorum libero laboriosam praesentium ipsa quia vero odio quidem.Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Placeat maxime corporis ullam voluptate
          quasi amet accusamus quae at laborum! Autem voluptas dolorum libero laboriosam
          praesentium ipsa quia vero odio quidem.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Placeat maxime corporis ullam voluptate quasi amet accusamus quae
          at
        </Accordion>
      </AccordionWrapper>
      <AccordionWrapper>
        <Accordion title="Click me 3">
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit.
          Placeat maxime corporis ullam voluptate quasi amet accusamus quae at laborum! Autem
          voluptas dolorum libero laboriosam praesentium ipsa quia vero odio quidem.Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Placeat maxime corporis ullam voluptate
          quasi amet accusamus quae at laborum! Autem voluptas dolorum libero laboriosam
          praesentium ipsa quia vero odio quidem.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Placeat maxime corporis ullam voluptate quasi amet accusamus quae
          at
        </Accordion>
      </AccordionWrapper>
    </div>
  );
};

const AccordionWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  &:last-child {
    border-bottom: none;
  }
`;
