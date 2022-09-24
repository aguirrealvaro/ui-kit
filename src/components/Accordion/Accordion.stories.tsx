import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "@/components";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Primary: ComponentStory<typeof Accordion> = () => {
  return (
    <div>
      <Accordion title="Click me 1" showBorder>
        Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit.
        Placeat maxime corporis ullam voluptate quasi amet accusamus quae at laborum! Autem
        voluptas dolorum libero laboriosam praesentium ipsa quia vero odio quidem.Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Placeat maxime corporis ullam voluptate
        quasi amet accusamus quae at laborum! Autem voluptas dolorum libero laboriosam
        praesentium ipsa quia vero odio quidem.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Placeat maxime corporis ullam voluptate quasi amet accusamus quae at
      </Accordion>
      <Accordion title="Click me 2" showBorder arrowPosition="left">
        Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit.
        Placeat maxime corporis ullam voluptate quasi amet accusamus quae at laborum! Autem
        voluptas dolorum libero laboriosam praesentium ipsa quia vero odio quidem.Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Placeat maxime corporis ullam voluptate
        quasi amet accusamus quae at laborum! Autem voluptas dolorum libero laboriosam
        praesentium ipsa quia vero odio quidem.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Placeat maxime corporis ullam voluptate quasi amet accusamus quae at
      </Accordion>
      <Accordion title="Click me 3" showBorder disabled>
        Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit.
        Placeat maxime corporis ullam voluptate quasi amet accusamus quae at laborum! Autem
        voluptas dolorum libero laboriosam praesentium ipsa quia vero odio quidem.Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Placeat maxime corporis ullam voluptate
        quasi amet accusamus quae at laborum! Autem voluptas dolorum libero laboriosam
        praesentium ipsa quia vero odio quidem.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Placeat maxime corporis ullam voluptate quasi amet accusamus quae at
      </Accordion>
    </div>
  );
};
