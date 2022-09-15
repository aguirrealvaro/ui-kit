import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
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
      <Modal isOpen={isOpen} onClose={onClose} isUnmounting={isUnmounting} size="xs">
        Modal
      </Modal>
    </>
  );
};

const Button = styled.button`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
