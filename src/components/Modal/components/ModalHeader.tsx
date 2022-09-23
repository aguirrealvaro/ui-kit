import styled from "styled-components";

export const ModalHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[5]};
`;
