import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { ModalHeader, ModalContent, ModalFooter } from "./Modal.layout";
import { Modal } from "@/components";
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

const Button = styled.button`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
