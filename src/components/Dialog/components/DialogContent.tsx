import styled from "styled-components";

export const DialogContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[4]};
  overflow-y: auto;
`;
