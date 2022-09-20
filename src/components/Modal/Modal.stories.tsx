import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModalHeader, ModalContent, ModalFooter } from "./components";
import { Modal, Button } from "@/components";
import { useDisclosure } from "@/hooks";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Primary: ComponentStory<typeof Modal> = () => {
  const { isOpen, onOpen, onClose, isUnmounting } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>open modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} isUnmounting={isUnmounting} size="sm">
        <ModalHeader>Header</ModalHeader>
        <ModalContent>Content</ModalContent>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    </>
  );
};
