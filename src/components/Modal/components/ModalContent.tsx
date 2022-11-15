import styled from "styled-components";

export const ModalContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[4]};
  overflow-y: auto;
`;
