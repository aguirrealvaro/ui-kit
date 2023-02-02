/* eslint-disable no-console */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Button, Modal, ModalHeader, ModalContent, ModalFooter, Link } from "@/components";
import { useDisclosure } from "@/hooks";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({
  isOpen: dummyIsOpen,
  onClose: dummyOnClose,
  isUnmounting: dummyIsUnmounting,
  ...args
}) => {
  const { isOpen, onOpen, onClose, isUnmounting } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>open modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} isUnmounting={isUnmounting} {...args}>
        <ModalHeader>Header</ModalHeader>
        <ModalContent>
          <Container>
            <p>Focus trap ON</p>
            <Button onClick={() => console.log("click button")}>Button</Button>
            <Link href="https://google.com">Link</Link>
          </Container>
        </ModalContent>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  size: "sm",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: baseline;
`;
