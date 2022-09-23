import styled from "styled-components";

export const ModalHeader = styled.div`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[5]};
`;
