import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Modal, ModalHeader, ModalContent, ModalFooter } from "@/components";
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam aliquam itaque
          velit tenetur deserunt laboriosam est culpa hic nihil officiis, saepe ut animi
          deleniti ea odio, voluptatum dolores quaerat?
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
