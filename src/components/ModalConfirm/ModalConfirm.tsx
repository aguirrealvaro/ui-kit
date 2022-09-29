import {
  FunctionComponent,
  ReactNode,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
import styled from "styled-components";
import { Modal, ModalHeader, ModalContent, ModalFooter, Button } from "@/components";
import { useDisclosure } from "@/hooks";
import { VariantType } from "@/types";

type ModalConfirmProps = {
  children: ReactNode;
  header: ReactNode;
  content: ReactNode;
  onConfirm: () => void;
  buttonVariant?: VariantType;
};

export const ModalConfirm: FunctionComponent<ModalConfirmProps> = ({
  children,
  header,
  content,
  onConfirm,
  buttonVariant,
}) => {
  const { isOpen, onOpen, onClose, isUnmounting } = useDisclosure();

  const child = (() => {
    if (!isValidElement(children)) return null;
    return cloneElement(children as ReactElement, { onClick: onOpen });
  })();

  return (
    <>
      {child}
      <Modal isOpen={isOpen} onClose={onClose} isUnmounting={isUnmounting} size="sm">
        <ModalHeader>{header}</ModalHeader>
        <ModalContent>{content}</ModalContent>
        <ModalFooter>
          <ButtonsContainer>
            <Button kind="alternative" onClick={onClose} variant="danger">
              Cancelar
            </Button>
            <Button kind="solid" onClick={onConfirm} variant={buttonVariant}>
              Confirmar
            </Button>
          </ButtonsContainer>
        </ModalFooter>
      </Modal>
    </>
  );
};

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: right;
`;
