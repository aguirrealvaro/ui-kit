/* eslint-disable no-console */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Button, Dialog, DialogHeader, DialogContent, DialogFooter, Link } from "@/components";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = ({ trigger: dummyTrigger, ...args }) => {
  const triggerComponent = <Button>Open Dialog</Button>;

  return (
    <>
      <Dialog trigger={triggerComponent} {...args}>
        <DialogHeader>Header</DialogHeader>
        <DialogContent>
          <Container>
            <p>Focus trap ON</p>
            <Button onClick={() => console.log("click button")}>Button</Button>
            <Link href="https://google.com">Link</Link>
          </Container>
        </DialogContent>
        <DialogFooter>Footer</DialogFooter>
      </Dialog>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "dialog-story",
  size: "sm",
  closeOnInteractions: true,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: baseline;
`;
